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

        createMany: procedure.input($Schema.SubjectInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subject.createMany(input as any))),

        create: procedure.input($Schema.SubjectInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subject.create(input as any))),

        deleteMany: procedure.input($Schema.SubjectInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subject.deleteMany(input as any))),

        delete: procedure.input($Schema.SubjectInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subject.delete(input as any))),

        findFirst: procedure.input($Schema.SubjectInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).subject.findFirst(input as any))),

        findMany: procedure.input($Schema.SubjectInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).subject.findMany(input as any))),

        findUnique: procedure.input($Schema.SubjectInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).subject.findUnique(input as any))),

        updateMany: procedure.input($Schema.SubjectInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subject.updateMany(input as any))),

        update: procedure.input($Schema.SubjectInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subject.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SubjectCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubjectCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubjectCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubjectCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SubjectCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubjectCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubjectGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubjectGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubjectCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubjectCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubjectGetPayload<T>, Context>) => Promise<Prisma.SubjectGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SubjectDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubjectDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubjectDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubjectDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SubjectDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubjectDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubjectGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubjectGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubjectDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubjectDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubjectGetPayload<T>, Context>) => Promise<Prisma.SubjectGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SubjectFindFirstArgs, TData = Prisma.SubjectGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SubjectFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SubjectGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubjectFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SubjectFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SubjectGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SubjectGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SubjectFindManyArgs, TData = Array<Prisma.SubjectGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SubjectFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SubjectGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubjectFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SubjectFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SubjectGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SubjectGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SubjectFindUniqueArgs, TData = Prisma.SubjectGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SubjectFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SubjectGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubjectFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SubjectFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SubjectGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SubjectGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SubjectUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubjectUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubjectUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubjectUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SubjectUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubjectUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubjectGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubjectGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubjectUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubjectUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubjectGetPayload<T>, Context>) => Promise<Prisma.SubjectGetPayload<T>>
            };

    };
}
