import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { FileText, Users, Tags, Mail, MessageSquare } from "lucide-react";

async function getStats() {
  const [articles, users, categories, subscribers, messages] = await Promise.all(
    [
      prisma.article.count(),
      prisma.user.count(),
      prisma.category.count(),
      prisma.newsletter.count({ where: { active: true } }),
      prisma.contactMessage.count({ where: { read: false } }),
    ]
  );
  return { articles, users, categories, subscribers, messages };
}

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  const stats = await getStats();

  const cards = [
    { label: "Artigos", value: stats.articles, icon: FileText },
    { label: "Usuários", value: stats.users, icon: Users },
    { label: "Categorias", value: stats.categories, icon: Tags },
    { label: "Inscritos", value: stats.subscribers, icon: Mail },
    { label: "Msg. Não Lidas", value: stats.messages, icon: MessageSquare },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-accent">
            Dashboard
          </h1>
          <p className="text-accent/60">
            Bem-vindo, {session.user?.name ?? "Admin"}
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl bg-card p-6 shadow-sm"
          >
            <card.icon className="h-8 w-8 text-accent" />
            <p className="mt-4 font-heading text-2xl font-bold text-accent">
              {card.value}
            </p>
            <p className="font-heading text-xs font-bold uppercase tracking-wider text-accent/60">
              {card.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
