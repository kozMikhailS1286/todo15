import { setErrorAC, SetErrorActionType, setAppStatusAC, SetStatusAType } from '../app/app-reducer'
import { Dispatch } from 'redux'
import { ResponseType } from '../api/todolists-api'

// generic function
export const handleServerAppError = <D>(dispatch: Dispatch, data: ResponseType<D>) => {
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}

export const handleServerNetworkError = (dispatch: Dispatch, errorMessage: string) => {
    dispatch(setAppStatusAC('failed'))
    dispatch(setErrorAC(errorMessage))
}

type ErrorUtilsDispatchType = Dispatch<SetErrorActionType | SetStatusAType>
