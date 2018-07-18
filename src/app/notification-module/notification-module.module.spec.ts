import { NotificationModuleModule } from './notification-module.module';

describe('NotificationModuleModule', () => {
  let notificationModuleModule: NotificationModuleModule;

  beforeEach(() => {
    notificationModuleModule = new NotificationModuleModule();
  });

  it('should create an instance', () => {
    expect(notificationModuleModule).toBeTruthy();
  });
});
