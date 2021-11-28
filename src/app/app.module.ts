import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// APP ROOT
import { AppComponent } from './app.component';

// FEATURE MODULES
import { NavigationModule } from '@shared/navigation/navigation.module';

// ROUTING MODULES
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, AboutComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
