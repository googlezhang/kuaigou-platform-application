import { NgModule } from '@angular/core';

import { KuaiGouPlatformSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [KuaiGouPlatformSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [KuaiGouPlatformSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class KuaiGouPlatformSharedCommonModule {}
