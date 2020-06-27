import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/contact';
import {ContactService} from '../../service/contact.service';
import * as _ from 'lodash';

import { from } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contacts:Array<Contact>;
contactsCache:Array<Contact>;
contactsLength:number;
searchNameText:string;
  constructor(private cs:ContactService,
               ) { }

  ngOnInit() {
    document.title = 'CRM|contact';


    this.cs.getContacts().subscribe((contacts:Array<Contact>)=>{
      this.contactsCache = this.contacts = _.sortBy(contacts,['name']);
      this.contactsLength = contacts.length;
    });
  }
      onKeyUpSerch(){
        const searchName = this.searchNameText.toLocaleLowerCase().trim();
        if(searchName.length >  0){
          this.contacts = this.contactsCache.filter((contact)=>_.includes(contact.name.toLocaleLowerCase(),searchName))

        }else{
          this.contacts = this.contactsCache;
        }
     }

}
