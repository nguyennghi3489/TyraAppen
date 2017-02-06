/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogComponent } from './blog.component';
import { CardListComponent } from '../../shared/components/card-list/card-list.component';
import { CardComponent } from '../../shared/components/card/card.component';

import { BlogService } from '../../core/services/blog.service';
import { HttpModule } from '@angular/http';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let blogService;
  let dataReturn;
  let expectedHero;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      declarations: [ BlogComponent, CardListComponent, CardComponent ],
      providers:[BlogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;

    blogService = fixture.debugElement.injector.get(BlogService);
    console.log(blogService)
    spyOn(blogService,'getUser').and.callThrough()
    dataReturn = blogService.getUser()
    expectedHero = [{"title":"ABC"},{"title":"ABC"}];
    component.cardList = expectedHero;
    fixture.detectChanges();
  });

  it('blogServer getUser function run', () => {
    expect(blogService.getUser).toHaveBeenCalled()
  });

  it('blogServer getUser return exactly the number of blog', () => {
    expect(dataReturn.length).toEqual(3)
  });

});
