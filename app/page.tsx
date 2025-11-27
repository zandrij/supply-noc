import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ConsoleUI } from "./ui/console";

export default function NOCDashboard() {
  return (
    <div className="p-8 bg-[#0a0a0a] min-h-screen !text-[#e4e4e7]">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Centro de Monitoreo NOC
      </h1>
{/* 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-[#101010] border-[#262626] !text-[#e4e4e7]">
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Servicios Críticos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#16a34a]">8/8</div>
            <p className="text-xs text-gray-500 mt-1">Todos Operacionales</p>
          </CardContent>
        </Card>

        <Card className="bg-[#101010] border-[#262626] !text-[#e4e4e7]">
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Uso Promedio CPU
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#3b82f6]">45%</div>
            <Progress value={45} className="h-2 [&>div]:bg-[#3b82f6]" />
            <p className="text-xs text-gray-500 mt-1">Normal</p>
          </CardContent>
        </Card>

        <Card className="bg-[#101010] border-[#262626] !text-[#e4e4e7]">
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Errores (Última Hora)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#dc2626]">3</div>
            <p className="text-xs text-gray-500 mt-1">Requiere Revisión</p>
          </CardContent>
        </Card>

        <Card className="bg-[#101010] border-[#262626] !text-[#e4e4e7]">
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Tráfico de Red
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120 Mbps</div>
            <p className="text-xs text-gray-500 mt-1">Estable</p>
          </CardContent>
        </Card>
      </div> */}

      {/* Sección de Estado de Servidores (Usando Table) */}
      <Card className="bg-[#101010] border-[#262626] !text-[#e4e4e7]">
        <CardHeader>
          <CardTitle>Estado de Servidores</CardTitle>
        </CardHeader>
        <CardContent>
          <ConsoleUI />
        </CardContent>
      </Card>
    </div>
  );
}
