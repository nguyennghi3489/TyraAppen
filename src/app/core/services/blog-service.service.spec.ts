/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogService } from './blog.service';
import { HttpModule } from '@angular/http';

describe('BlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    	imports:[HttpModule],
      providers: [BlogService]
    });
  });

  it('should ...', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});
