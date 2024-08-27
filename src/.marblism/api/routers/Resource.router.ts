/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ResourceInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).resource.createMany(input as any))),

        create: procedure.input($Schema.ResourceInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).resource.create(input as any))),

        deleteMany: procedure.input($Schema.ResourceInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).resource.deleteMany(input as any))),

        delete: procedure.input($Schema.ResourceInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).resource.delete(input as any))),

        findFirst: procedure.input($Schema.ResourceInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).resource.findFirst(input as any))),

        findMany: procedure.input($Schema.ResourceInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).resource.findMany(input as any))),

        findUnique: procedure.input($Schema.ResourceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).resource.findUnique(input as any))),

        updateMany: procedure.input($Schema.ResourceInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).resource.updateMany(input as any))),

        update: procedure.input($Schema.ResourceInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).resource.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ResourceCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResourceCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResourceCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResourceCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ResourceCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResourceCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ResourceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ResourceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResourceCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResourceCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ResourceGetPayload<T>, Context>) => Promise<Prisma.ResourceGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ResourceDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResourceDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResourceDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResourceDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ResourceDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResourceDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ResourceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ResourceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResourceDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResourceDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ResourceGetPayload<T>, Context>) => Promise<Prisma.ResourceGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ResourceFindFirstArgs, TData = Prisma.ResourceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ResourceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ResourceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ResourceFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ResourceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ResourceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ResourceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ResourceFindManyArgs, TData = Array<Prisma.ResourceGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ResourceFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ResourceGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ResourceFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ResourceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ResourceGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ResourceGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ResourceFindUniqueArgs, TData = Prisma.ResourceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ResourceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ResourceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ResourceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ResourceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ResourceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ResourceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ResourceUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResourceUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResourceUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResourceUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ResourceUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResourceUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ResourceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ResourceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResourceUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResourceUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ResourceGetPayload<T>, Context>) => Promise<Prisma.ResourceGetPayload<T>>
            };

    };
}
