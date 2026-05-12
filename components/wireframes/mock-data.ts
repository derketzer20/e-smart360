/** Datos ficticios solo para wireframes — no representan cuentas reales. */

export const mockResellerSummary = {
  packageName: "Agency Premium (demo)",
  expiredDate: "2027-01-15",
  subscribersUsed: 1240,
  subscribersLimit: 5000,
  messageCreditsUsed: 89000,
  messageCreditsLabel: "ilimitado (demo)",
};

export const mockClients = [
  {
    id: 1001,
    name: "Cliente Demo SA de CV",
    email: "contacto@cliente-demo.mx",
    packageId: 3,
    packageLabel: "META Pack (ejemplo)",
    expiredDate: "2026-08-01",
    status: 1,
    phoneDisplay: "+52 55 0000 0001",
  },
  {
    id: 1002,
    name: "Clínica Ejemplo",
    email: "ops@clinica-ejemplo.mx",
    packageId: 2,
    packageLabel: "Dual Pack (ejemplo)",
    expiredDate: "2026-06-20",
    status: 1,
    phoneDisplay: "+52 81 0000 0002",
  },
  {
    id: 1003,
    name: "Agencia Creativa Ficticia",
    email: "hola@agencia-ficticia.mx",
    packageId: 1,
    packageLabel: "WhatsApp Pack (ejemplo)",
    expiredDate: "2025-12-01",
    status: 0,
    phoneDisplay: "+52 33 0000 0003",
  },
];

export const mockUsageModules = [
  { module: "Subscribers", used: 1240, limit: 5000 },
  { module: "Message Credit", used: 89000, limit: 145800 },
  { module: "Bot AI Token", used: 2_100_000, limit: 5_000_000 },
  { module: "Live Chat", used: 4, limit: 5 },
];

export const mockClientApiKeyMasked = "sk_live_••••••••••••8f3a (demo)";
