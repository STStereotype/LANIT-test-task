import { BlockLinkModel } from '@shared/models';

export interface HomeState {
    resources: BlockLinkModel[];
}

export const initialState: HomeState = {
    resources: []
};
