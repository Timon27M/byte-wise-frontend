type TLoginOrRegisterResponse = {
    user: {
        login: string;
        id: string;
        created_at: string;
    };
    token: string;
};
export declare const userApi: import("@reduxjs/toolkit/query").Api<import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, {
    loginUser: import("@reduxjs/toolkit/query").MutationDefinition<{
        login: string;
        password: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, TLoginOrRegisterResponse, "userApi", unknown>;
    registerUser: import("@reduxjs/toolkit/query").MutationDefinition<{
        login: string;
        password: string;
        passwordConfirm: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, TLoginOrRegisterResponse, "userApi", unknown>;
}, "userApi", never, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;
export declare const useLoginUserMutation: <R extends Record<string, any> = ({
    requestId?: undefined;
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    data?: undefined;
    error?: undefined;
    endpointName?: string;
    startedTimeStamp?: undefined;
    fulfilledTimeStamp?: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    isUninitialized: true;
    isLoading: false;
    isSuccess: false;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
} & Omit<{
    requestId: string;
    data?: TLoginOrRegisterResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "data" | "fulfilledTimeStamp"> & Required<Pick<{
    requestId: string;
    data?: TLoginOrRegisterResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "data" | "fulfilledTimeStamp">> & {
    error: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
    isUninitialized: false;
    isLoading: false;
    isSuccess: true;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.pending;
} & {
    requestId: string;
    data?: TLoginOrRegisterResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
} & {
    data?: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.pending;
    isUninitialized: false;
    isLoading: true;
    isSuccess: false;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
} & Omit<{
    requestId: string;
    data?: TLoginOrRegisterResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "error"> & Required<Pick<{
    requestId: string;
    data?: TLoginOrRegisterResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "error">> & {
    status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
    isUninitialized: false;
    isLoading: false;
    isSuccess: false;
    isError: true;
})>(options?: {
    selectFromResult?: ((state: ({
        requestId?: undefined;
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        data?: undefined;
        error?: undefined;
        endpointName?: string;
        startedTimeStamp?: undefined;
        fulfilledTimeStamp?: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        isUninitialized: true;
        isLoading: false;
        isSuccess: false;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
    } & Omit<{
        requestId: string;
        data?: TLoginOrRegisterResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "data" | "fulfilledTimeStamp"> & Required<Pick<{
        requestId: string;
        data?: TLoginOrRegisterResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "data" | "fulfilledTimeStamp">> & {
        error: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
        isUninitialized: false;
        isLoading: false;
        isSuccess: true;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.pending;
    } & {
        requestId: string;
        data?: TLoginOrRegisterResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    } & {
        data?: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.pending;
        isUninitialized: false;
        isLoading: true;
        isSuccess: false;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
    } & Omit<{
        requestId: string;
        data?: TLoginOrRegisterResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "error"> & Required<Pick<{
        requestId: string;
        data?: TLoginOrRegisterResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "error">> & {
        status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
        isUninitialized: false;
        isLoading: false;
        isSuccess: false;
        isError: true;
    })) => R) | undefined;
    fixedCacheKey?: string;
} | undefined) => readonly [(arg: {
    login: string;
    password: string;
}) => import("@reduxjs/toolkit/query").MutationActionCreatorResult<import("@reduxjs/toolkit/query").MutationDefinition<{
    login: string;
    password: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, TLoginOrRegisterResponse, "userApi", unknown>>, import("@reduxjs/toolkit/query").TSHelpersNoInfer<R> & {
    originalArgs?: {
        login: string;
        password: string;
    } | undefined;
    reset: () => void;
}], useRegisterUserMutation: <R extends Record<string, any> = ({
    requestId?: undefined;
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    data?: undefined;
    error?: undefined;
    endpointName?: string;
    startedTimeStamp?: undefined;
    fulfilledTimeStamp?: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    isUninitialized: true;
    isLoading: false;
    isSuccess: false;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
} & Omit<{
    requestId: string;
    data?: TLoginOrRegisterResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "data" | "fulfilledTimeStamp"> & Required<Pick<{
    requestId: string;
    data?: TLoginOrRegisterResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "data" | "fulfilledTimeStamp">> & {
    error: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
    isUninitialized: false;
    isLoading: false;
    isSuccess: true;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.pending;
} & {
    requestId: string;
    data?: TLoginOrRegisterResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
} & {
    data?: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.pending;
    isUninitialized: false;
    isLoading: true;
    isSuccess: false;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
} & Omit<{
    requestId: string;
    data?: TLoginOrRegisterResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "error"> & Required<Pick<{
    requestId: string;
    data?: TLoginOrRegisterResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "error">> & {
    status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
    isUninitialized: false;
    isLoading: false;
    isSuccess: false;
    isError: true;
})>(options?: {
    selectFromResult?: ((state: ({
        requestId?: undefined;
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        data?: undefined;
        error?: undefined;
        endpointName?: string;
        startedTimeStamp?: undefined;
        fulfilledTimeStamp?: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        isUninitialized: true;
        isLoading: false;
        isSuccess: false;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
    } & Omit<{
        requestId: string;
        data?: TLoginOrRegisterResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "data" | "fulfilledTimeStamp"> & Required<Pick<{
        requestId: string;
        data?: TLoginOrRegisterResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "data" | "fulfilledTimeStamp">> & {
        error: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
        isUninitialized: false;
        isLoading: false;
        isSuccess: true;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.pending;
    } & {
        requestId: string;
        data?: TLoginOrRegisterResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    } & {
        data?: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.pending;
        isUninitialized: false;
        isLoading: true;
        isSuccess: false;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
    } & Omit<{
        requestId: string;
        data?: TLoginOrRegisterResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "error"> & Required<Pick<{
        requestId: string;
        data?: TLoginOrRegisterResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "error">> & {
        status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
        isUninitialized: false;
        isLoading: false;
        isSuccess: false;
        isError: true;
    })) => R) | undefined;
    fixedCacheKey?: string;
} | undefined) => readonly [(arg: {
    login: string;
    password: string;
    passwordConfirm: string;
}) => import("@reduxjs/toolkit/query").MutationActionCreatorResult<import("@reduxjs/toolkit/query").MutationDefinition<{
    login: string;
    password: string;
    passwordConfirm: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, TLoginOrRegisterResponse, "userApi", unknown>>, import("@reduxjs/toolkit/query").TSHelpersNoInfer<R> & {
    originalArgs?: {
        login: string;
        password: string;
        passwordConfirm: string;
    } | undefined;
    reset: () => void;
}];
export {};
