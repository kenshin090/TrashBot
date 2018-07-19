import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {User} from '../../app/auth/user';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import {TabsPage} from '../tabs/tabs'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginServiceProvider]
})
export class LoginPage {

  @ViewChild('email') email: any;
  private username: string;
  private password: string;
  private user: User = new User();
  private error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(): void {

    
    this.user.email = this.username;
    this.user.password = this.password;
    
    this.loginService.login(this.user).subscribe(
      res => {
        debugger;
        console.log("login correcto");
        this.navCtrl.push(TabsPage);
        
      }, error => {
        debugger;
        this.error = error;
        console.log("error login", error);
      }
    );
  }

  }

