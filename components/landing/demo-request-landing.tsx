"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

const industries = [
  { value: "retail", label: "Retail y e-commerce" },
  { value: "services", label: "Servicios profesionales" },
  { value: "health", label: "Salud y bienestar" },
  { value: "education", label: "Educación" },
  { value: "realestate", label: "Inmobiliario" },
  { value: "hospitality", label: "Alimentos y hospitalidad" },
  { value: "automotive", label: "Automotriz" },
  { value: "other", label: "Otra" },
];

const employeeBands = [
  { value: "1-10", label: "1 – 10" },
  { value: "11-50", label: "11 – 50" },
  { value: "51-200", label: "51 – 200" },
  { value: "201-500", label: "201 – 500" },
  { value: "501+", label: "501 o más" },
];

const jobTitles = [
  { value: "c-level", label: "C-level / Fundador" },
  { value: "director", label: "Director / VP" },
  { value: "manager", label: "Gerente" },
  { value: "marketing", label: "Marketing / Growth" },
  { value: "sales", label: "Ventas / CX" },
  { value: "ops", label: "Operaciones / IT" },
  { value: "other", label: "Otro" },
];

const demoFormSchema = z.object({
  firstName: z.string().min(1, "Requerido"),
  lastName: z.string().min(1, "Requerido"),
  email: z.string().email("Correo no válido"),
  industry: z.string().min(1, "Selecciona una industria"),
  employees: z.string().min(1, "Selecciona un rango"),
  phone: z.string().min(8, "Teléfono no válido"),
  company: z.string().min(1, "Requerido"),
  jobTitle: z.string().min(1, "Selecciona un puesto"),
});

type DemoFormValues = z.infer<typeof demoFormSchema>;

const benefits = [
  {
    title: "Disminución del 82%",
    rest: "en tiempo de atención al cliente.",
  },
  {
    title: "Agentes de voz con IA:",
    rest: "automatización total de llamadas con lenguaje natural.",
  },
  {
    title: "Tasa de conversión:",
    rest: "63% en conversaciones orientadas a venta.",
  },
  {
    title: "Agendamiento automático:",
    rest: "integración directa con tu calendario.",
  },
  {
    title: "Disponibilidad 24/7:",
    rest: "atención inmediata sin tiempos de espera.",
  },
  {
    title: "Omnicanalidad inteligente:",
    rest: "WhatsApp, Instagram, Facebook y web en un solo flujo.",
  },
  {
    title: "Reducción de costos operativos:",
    rest: "hasta 60% en operación de call center.",
  },
  {
    title: 'Implementación "plug & play":',
    rest: "configuración rápida con tu stack actual.",
  },
];

const fieldClass =
  "h-11 w-full rounded-lg border-input bg-background shadow-xs transition-[color,box-shadow]";

export function DemoRequestLanding() {
  const reduceMotion = useReducedMotion();

  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      industry: "",
      employees: "",
      phone: "",
      company: "",
      jobTitle: "",
    },
  });

  function onSubmit(values: DemoFormValues) {
    toast.success("Solicitud enviada", {
      description: `Gracias, ${values.firstName}. Te contactaremos en un día hábil.`,
    });
    form.reset();
  }

  return (
    <div className="relative z-10">
      <div
        className="page-grid-bg pointer-events-none fixed inset-0 -z-10 opacity-[0.45]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6 lg:px-8 lg:pt-36 lg:pb-28">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card-sm)] sm:p-8 lg:p-9">
              <div className="mb-6 inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-px w-8 bg-foreground/30" />
                Demo guiada
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] shadow-[0_0_12px_rgba(37,211,102,0.45)]" />
              </div>
              <h1 className="text-center font-display text-2xl tracking-tight text-foreground sm:text-[1.65rem]">
                Solicitar una demostración
              </h1>
              <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
                Completa el formulario y un especialista te contactará para agendar tu sesión.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Nombre" className={fieldClass} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Apellidos</FormLabel>
                          <FormControl>
                            <Input placeholder="Apellidos" className={fieldClass} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico de trabajo</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="nombre@empresa.com"
                            className={fieldClass}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industria</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className={fieldClass}>
                                <SelectValue placeholder="Seleccionar industria" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {industries.map((o) => (
                                <SelectItem key={o.value} value={o.value}>
                                  {o.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="employees"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número de empleados</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className={fieldClass}>
                                <SelectValue placeholder="Seleccionar" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {employeeBands.map((o) => (
                                <SelectItem key={o.value} value={o.value}>
                                  {o.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número de contacto</FormLabel>
                        <FormControl>
                          <div className="flex h-11 overflow-hidden rounded-lg border border-input bg-background shadow-xs ring-offset-background focus-within:ring-[3px] focus-within:ring-ring/50">
                            <span className="flex shrink-0 items-center gap-1.5 border-r border-border bg-muted/50 px-3 text-sm text-muted-foreground">
                              <span aria-hidden>🇲🇽</span>
                              <span className="font-mono text-xs">+52</span>
                            </span>
                            <Input
                              className="h-11 flex-1 rounded-none border-0 bg-transparent px-3 shadow-none focus-visible:ring-0"
                              placeholder="10 dígitos"
                              inputMode="tel"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre de la empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Empresa" className={fieldClass} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Puesto de trabajo</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className={fieldClass}>
                              <SelectValue placeholder="Seleccionar" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {jobTitles.map((o) => (
                              <SelectItem key={o.value} value={o.value}>
                                {o.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="h-12 w-full rounded-full bg-foreground text-sm font-medium text-background hover:bg-foreground/90"
                  >
                    Enviar
                  </Button>

                  <p className="text-center text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                    Al hacer clic en Enviar, usted acepta la recopilación y el uso de sus datos por parte de
                    E-SMART360.
                  </p>
                  <p className="text-center text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                    Nos comunicaremos con usted dentro de un día hábil para programar su demostración y crear precios
                    personalizados adaptados a sus necesidades de contratación.
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 space-y-7 lg:order-2 lg:pt-2"
          >
            <h2 className="font-display text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem] xl:text-5xl">
              Eleva la experiencia de tus clientes con atención 24/7 y automatizada
            </h2>
            <div className="relative inline-block max-w-xl">
              <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-[#0070f3] sm:text-3xl lg:text-4xl">
                WhatsApp Business API: conversaciones oficiales, seguras y a escala.
              </p>
              <svg
                className="pointer-events-none absolute -bottom-1 left-0 w-full text-[#0070f3]/70"
                viewBox="0 0 400 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 8 Q 100 2 200 8 T 396 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Traducimos tus procesos en tecnología inteligente para incrementar la rentabilidad de tu negocio: voz,
              chat y datos unificados, con plantillas y webhooks alineados a las políticas de Meta.
            </p>
            <ul className="max-w-xl space-y-4">
              {benefits.map((b, i) => (
                <motion.li
                  key={b.title}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: reduceMotion ? 0 : i * 0.04, duration: 0.35 }}
                  className="flex gap-3 text-sm leading-relaxed text-foreground/90 sm:text-[15px]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#25D366]" aria-hidden />
                  <span>
                    <strong className="font-semibold text-foreground">{b.title}</strong> {b.rest}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
