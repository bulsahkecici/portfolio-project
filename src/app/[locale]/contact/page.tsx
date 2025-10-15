"use client";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(5, "Message must be at least 5 characters")
});

type FormData = z.infer<typeof schema>;

export default function Page(){
  const t = useTranslations("contact");
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<FormData>({ 
    resolver: zodResolver(schema) 
  });

  const onSubmit = async (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <section className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label className="block">
          <span className="block text-sm mb-1">{t("name")}</span>
          <input 
            className="w-full rounded border px-3 py-2" 
            {...register("name")}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
        </label>
        <label className="block">
          <span className="block text-sm mb-1">{t("email")}</span>
          <input 
            className="w-full rounded border px-3 py-2" 
            type="email"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </label>
        <label className="block">
          <span className="block text-sm mb-1">{t("message")}</span>
          <textarea 
            className="w-full rounded border px-3 py-2" 
            rows={5}
            {...register("message")}
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
        </label>
        <button 
          type="submit"
          disabled={isSubmitting} 
          className="rounded-md border px-4 py-2 disabled:opacity-50"
        >
          {t("submit")}
        </button>
      </form>
    </section>
  );
}
