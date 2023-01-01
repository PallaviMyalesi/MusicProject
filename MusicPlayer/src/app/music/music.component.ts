import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// declare function getToday(): any;
// declare function greetings(): any;

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit{
  ngOnInit(){

    // getToday();
    // greetings()

    $(document).ready(function(){
      $(".songlist").click(function(){
        $(".songlisthidden").toggle();
      });
    });
  }

  }


