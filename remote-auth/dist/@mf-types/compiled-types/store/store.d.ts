export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    userApi: import("@reduxjs/toolkit/query").CombinedState<{
        loginUser: import("@reduxjs/toolkit/query").MutationDefinition<{
            login: string;
            password: string;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, {
            user: {
                login: string;
                id: string;
                created_at: string;
            };
            token: string;
        }, "userApi", unknown>;
        registerUser: import("@reduxjs/toolkit/query").MutationDefinition<{
            login: string;
            password: string;
            passwordConfirm: string;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, {
            user: {
                login: string;
                id: string;
                created_at: string;
            };
            token: string;
        }, "userApi", unknown>;
    }, never, "userApi">;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        userApi: import("@reduxjs/toolkit/query").CombinedState<{
            loginUser: import("@reduxjs/toolkit/query").MutationDefinition<{
                login: string;
                password: string;
            }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, {
                user: {
                    login: string;
                    id: string;
                    created_at: string;
                };
                token: string;
            }, "userApi", unknown>;
            registerUser: import("@reduxjs/toolkit/query").MutationDefinition<{
                login: string;
                password: string;
                passwordConfirm: string;
            }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, {
                user: {
                    login: string;
                    id: string;
                    created_at: string;
                };
                token: string;
            }, "userApi", unknown>;
        }, never, "userApi">;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
