import { AnnouncementService } from '@/services/announcement/announcement.service';
import { ModalService } from '@/services/modal/modal.service';

export type RoundHandlerParameters = {
  announcementService?: AnnouncementService;
  modalService?: ModalService;
};
