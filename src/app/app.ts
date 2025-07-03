import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavSection } from "./components/nav-section/nav-section";
import { WrapperSection } from "./components/wrapper-section/wrapper-section";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'productsPage';
}
