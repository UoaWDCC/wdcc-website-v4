import type { Event } from "@/types/models";

import { wdccAGM2024 } from "./events2024/wdcc-agm-2024";
import { wdccChiasma2024 } from "./events2024/wdcc-chiasma-2024";

export const eventsData: Event[] = [wdccChiasma2024, wdccAGM2024];
