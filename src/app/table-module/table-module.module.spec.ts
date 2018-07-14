import { TableModuleModule } from './table-module.module';

describe('TableModuleModule', () => {
  let tableModuleModule: TableModuleModule;

  beforeEach(() => {
    tableModuleModule = new TableModuleModule();
  });

  it('should create an instance', () => {
    expect(tableModuleModule).toBeTruthy();
  });
});
