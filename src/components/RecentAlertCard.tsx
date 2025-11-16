import { AlertTriangle, Zap, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RecentAlertCardProps {
  id: string;
  title: string;
  timestamp: string;
  weapons_detected: number;
  confidence: number;
  threat_score?: number;
  image_url?: string;
  image_base64?: string;
  type: "critical" | "warning" | "info";
  description: string;
}

const RecentAlertCard = ({
  id,
  title,
  timestamp,
  weapons_detected,
  confidence,
  threat_score,
  image_url,
  image_base64,
  type,
  description,
}: RecentAlertCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case "critical":
        return "destructive";
      case "warning":
        return "warning";
      default:
        return "secondary";
    }
  };

  const formattedTime = new Date(timestamp).toLocaleString();

  // Use image_url from storage if available, otherwise fall back to base64
  const displayImage = image_url || (image_base64 ? `data:image/jpeg;base64,${image_base64}` : "");
  
  // Debug logging
  console.log(`RecentAlertCard ${id}: image_url="${image_url}", image_base64="${image_base64 ? 'present' : 'empty'}", displayImage="${displayImage}"`);

  // Check if alert is less than 1 hour old
  const alertTime = new Date(timestamp).getTime();
  const currentTime = new Date().getTime();
  const isRecent = (currentTime - alertTime) < 60 * 60 * 1000; // 1 hour in milliseconds

  return (
    <Card className={`p-6 bg-white dark:bg-gray-900 border dark:border-gray-800 hover:shadow-xl transition-all duration-300 overflow-hidden group ${isRecent ? 'border-2 border-red-500' : 'border-gray-200'}`}>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image on the Left */}
        <div className="w-full lg:w-72 h-56 lg:h-auto flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
          {displayImage ? (
            <img
              src={displayImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 dark:text-gray-500">
              <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-full mb-3">
                <AlertTriangle className="w-10 h-10" />
              </div>
              <span className="text-sm font-medium">No image available</span>
            </div>
          )}
        </div>

        {/* Information on the Right */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-2">{title}</h3>
              <Badge variant={getTypeColor() as any} className="capitalize text-sm px-3 py-1">
                {type}
              </Badge>
            </div>
            <span className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full font-medium">
              #{id}
            </span>
          </div>

          {/* Timestamp */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4 bg-gray-50 dark:bg-gray-800/50 px-3 py-2 rounded-lg w-fit">
            <Clock className="w-4 h-4" />
            <span className="font-medium">{formattedTime}</span>
          </div>

          {/* Weapons Detected */}
          <div className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-xl border border-red-200 dark:border-red-900/50">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
              <Zap className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-400 block">Weapons Detected</span>
              <span className="text-2xl font-bold text-red-600 dark:text-red-400">{weapons_detected}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RecentAlertCard;
