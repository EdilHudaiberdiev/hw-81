import {AppDispatch, RootState} from './store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const navigate = useNavigate();