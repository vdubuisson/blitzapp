import { AnnouncementService } from '@/services/announcement/announcement.service';
import { ModalService } from '@/services/modal/modal.service';

export interface RoundHandlerParameters {
  announcementService?: AnnouncementService;
  modalService?: ModalService;
}
