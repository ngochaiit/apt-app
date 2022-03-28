import { Reducers } from './configStore'

declare global { 
    declare type AppState = Reducers;
}