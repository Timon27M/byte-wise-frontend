
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/AuthApp';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/AuthApp' ? typeof import('REMOTE_ALIAS_IDENTIFIER/AuthApp') :any;