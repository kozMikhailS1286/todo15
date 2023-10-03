export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


export type SetStatusAType = ReturnType<typeof setAppStatusAC>

export const initialState = {
    status: 'loading' as RequestStatusType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)


export type ActionType = SetStatusAType
