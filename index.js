import React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const backlog = [
  {
    id: 1,
    nombre: "Gestión de Inventarios",
    descripcion: "Los artesanos pueden añadir, editar y eliminar productos.",
    prioridad: "Alta",
    criterios: "Se pueden gestionar al menos 100 productos por usuario."
  },
  {
    id: 2,
    nombre: "Pagos Seguros",
    descripcion: "Integrar pasarelas de pago confiables.",
    prioridad: "Alta",
    criterios: "Se procesan pagos con tarjetas y transferencias seguras."
  },
  {
    id: 3,
    nombre: "Optimización Móvil",
    descripcion: "La plataforma debe ser responsive.",
    prioridad: "Alta",
    criterios: "Se visualiza correctamente en dispositivos móviles."
  },
  {
    id: 4,
    nombre: "Capacitación",
    descripcion: "Proveer tutoriales y sesiones en vivo.",
    prioridad: "Media",
    criterios: "El 80% de los usuarios completan la capacitación."
  },
  {
    id: 5,
    nombre: "Soporte Técnico",
    descripcion: "Implementar chat de soporte en la plataforma.",
    prioridad: "Media",
    criterios: "Se resuelven al menos 90% de las solicitudes en 24 horas."
  },
  {
    id: 6,
    nombre: "Documentación",
    descripcion: "Crear manual de usuario y FAQs.",
    prioridad: "Baja",
    criterios: "Documento disponible en PDF y accesible en la web."
  }
];

export default function BacklogApp() {
  const [tasks, setTasks] = useState(backlog);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Backlog de Historias de Usuario</h1>
      <div className="grid gap-4">
        {tasks.map((task) => (
          <Card key={task.id} className="p-4 border border-gray-300 rounded-lg shadow-md">
            <CardContent>
              <h2 className="text-lg font-semibold">{task.nombre}</h2>
              <p className="text-sm text-gray-600">{task.descripcion}</p>
              <p className="text-sm font-bold">Prioridad: {task.prioridad}</p>
              <p className="text-sm italic">Criterios: {task.criterios}</p>
              <Button className="mt-2" variant="outline">
                Ver detalles
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
