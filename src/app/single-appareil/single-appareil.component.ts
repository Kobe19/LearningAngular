import {Component, OnInit} from '@angular/core';
import {AppareilService} from "../service/appareil.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit{

  name: string | undefined = 'Appareil';
  status: string | undefined = 'Status';
  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id)?.name;
    this.status = this.appareilService.getAppareilById(+id)?.status;
  }
}
