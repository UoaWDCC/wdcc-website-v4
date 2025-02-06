import type { Event } from "@/types/models";

import { events2024Data } from "./events2024/events2024.data";
import { events2025Data } from "./events2025/events2025.data";

export const eventsData: Event[] = [...events2024Data, ...events2025Data];
