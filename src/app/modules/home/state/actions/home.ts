import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { BlockLinkModel } from '@shared/models';

export const loadResources = createAction('[Home] load resources');
export const loadResourcesSuccess = createAction('[Home] load resources success', props<{ resources: BlockLinkModel[] }>());
export const loadResourcesFails = createAction('[Home] load resources fails', props<{ error: HttpErrorResponse }>());
