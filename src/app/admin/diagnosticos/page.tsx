import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, ClipboardList } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDiagnosticos() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/admin/login");
  }

  const submissions = await prisma.diagnosticSubmission.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="inline-flex items-center gap-1 text-sm text-accent/60 hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-2 text-accent">
          <ClipboardList className="h-5 w-5" />
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-accent/60">
            {submissions.length} diagnósticos
          </span>
        </div>
      </div>

      <h1 className="mb-6 font-heading text-2xl font-bold text-accent">
        Diagnósticos recebidos
      </h1>

      {submissions.length === 0 ? (
        <div className="rounded-xl bg-card p-10 text-center shadow-sm">
          <p className="text-accent/60">
            Nenhum diagnóstico recebido ainda.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((sub) => {
            const answers = sub.answers as Record<string, number>;
            const total = Object.values(answers).reduce((a, b) => a + b, 0);
            const count = Object.keys(answers).length;
            const avg = count ? (total / count).toFixed(2) : "-";

            return (
              <details
                key={sub.id}
                className="group rounded-xl bg-card shadow-sm"
                open={false}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
                  <div className="min-w-0">
                    <p className="truncate font-heading font-bold text-accent">
                      {sub.name}
                    </p>
                    <p className="truncate text-sm text-accent/60">
                      {sub.whatsapp}
                      {sub.email ? ` · ${sub.email}` : ""}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <div className="text-right">
                      <p className="font-heading text-sm font-bold text-accent">
                        Média {avg}
                      </p>
                      <p className="text-xs text-accent/50">
                        {new Date(sub.createdAt).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                    {!sub.read && (
                      <span className="rounded-full bg-gold/15 px-2 py-1 text-xs font-bold text-gold">
                        Novo
                      </span>
                    )}
                  </div>
                </summary>

                <div className="space-y-5 border-t border-accent/10 p-5">
                  <dl className="grid gap-3 sm:grid-cols-2">
                    {sub.age && <Info label="Idade" value={sub.age} />}
                    {sub.occupation && <Info label="Ocupação" value={sub.occupation} />}
                    {sub.course && <Info label="Curso" value={sub.course} />}
                    {sub.howMet && <Info label="Como conheceu" value={sub.howMet} />}
                    <Info label="WhatsApp" value={sub.whatsapp} />
                    {sub.email && <Info label="E-mail" value={sub.email} />}
                    {sub.deadline && <Info label="Prazo" value={sub.deadline} />}
                  </dl>

                  {sub.objective && (
                    <Block title="Objetivo" value={sub.objective} />
                  )}
                  {sub.goalSpecific && (
                    <Block title="Objetivo específico" value={sub.goalSpecific} />
                  )}
                  {sub.relation && (
                    <Block title="Relação com os estudos" value={sub.relation} />
                  )}

                  <div>
                    <h3 className="mb-2 font-heading text-xs font-bold uppercase tracking-wider text-accent/60">
                      Respostas ({count} itens)
                    </h3>
                    <div className="space-y-1">
                      {Object.entries(answers)
                        .sort((a, b) => Number(a[0]) - Number(b[0]))
                        .map(([id, value]) => (
                          <div
                            key={id}
                            className="flex items-center justify-between rounded-lg bg-cream px-3 py-1.5 text-sm"
                          >
                            <span className="text-accent/70">Item {id}</span>
                            <span className="font-heading font-bold text-accent">
                              {value}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-heading text-xs font-bold uppercase tracking-wider text-accent/50">
        {label}
      </dt>
      <dd className="text-sm text-accent">{value}</dd>
    </div>
  );
}

function Block({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <h3 className="mb-1 font-heading text-xs font-bold uppercase tracking-wider text-accent/60">
        {title}
      </h3>
      <p className="whitespace-pre-wrap rounded-lg bg-cream px-4 py-3 text-sm text-accent">
        {value}
      </p>
    </div>
  );
}
