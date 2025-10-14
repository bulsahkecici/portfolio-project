"use client";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(5) });
type FormData = z.infer<typeof schema>;

export default function Page(){
  const t = useTranslations("contact");
  const { register, handleSubmit, formState:{errors,isSubmitting} } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = async (data: FormData) => { alert(JSON.stringify(data,null,2)); };
  return (
    <section className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label className="block">
          <span className="block mb-1">{t("name")}</span>
          <input {...register("name")} className="w-full border rounded px-3 py-2" aria-invalid={!!errors.name}/>
          {errors.name && <small className="text-red-600">{errors.name.message}</small>}
        </label>
        <label className="block">
          <span className="block mb-1">{t("email")}</span>
          <input {...register("email")} className="w-full border rounded px-3 py-2" aria-invalid={!!errors.email}/>
          {errors.email && <small className="text-red-600">{errors.email.message}</small>}
        </label>
        <label className="block">
          <span className="block mb-1">{t("message")}</span>
          <textarea {...register("message")} className="w-full border rounded px-3 py-2" rows={5} aria-invalid={!!errors.message}/>
          {errors.message && <small className="text-red-600">{errors.message.message}</small>}
        </label>
        <button disabled={isSubmitting} className="rounded-md border px-4 py-2">{t("submit")}</button>
      </form>
    </section>
  );
}

