import { AppState } from '../reducer';
import { SecretSantaState } from './SecretSantaReducer';

export function selectSecretSantaState(state: AppState): SecretSantaState {
    return state.secretSanta;
}
