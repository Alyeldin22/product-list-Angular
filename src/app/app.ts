import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavSection } from "./nav-section/nav-section";
import { WrapperSection } from "./wrapper-section/wrapper-section";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavSection, WrapperSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'productsPage';
}
