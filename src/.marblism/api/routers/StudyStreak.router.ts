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

        createMany: procedure.input($Schema.StudyStreakInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studyStreak.createMany(input as any))),

        create: procedure.input($Schema.StudyStreakInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studyStreak.create(input as any))),

        deleteMany: procedure.input($Schema.StudyStreakInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studyStreak.deleteMany(input as any))),

        delete: procedure.input($Schema.StudyStreakInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studyStreak.delete(input as any))),

        findFirst: procedure.input($Schema.StudyStreakInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).studyStreak.findFirst(input as any))),

        findMany: procedure.input($Schema.StudyStreakInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).studyStreak.findMany(input as any))),

        findUnique: procedure.input($Schema.StudyStreakInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).studyStreak.findUnique(input as any))),

        updateMany: procedure.input($Schema.StudyStreakInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studyStreak.updateMany(input as any))),

        update: procedure.input($Schema.StudyStreakInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studyStreak.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.StudyStreakCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudyStreakCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudyStreakCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudyStreakCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.StudyStreakCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudyStreakCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StudyStreakGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StudyStreakGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudyStreakCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudyStreakCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StudyStreakGetPayload<T>, Context>) => Promise<Prisma.StudyStreakGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.StudyStreakDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudyStreakDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudyStreakDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudyStreakDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.StudyStreakDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudyStreakDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StudyStreakGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StudyStreakGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudyStreakDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudyStreakDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StudyStreakGetPayload<T>, Context>) => Promise<Prisma.StudyStreakGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.StudyStreakFindFirstArgs, TData = Prisma.StudyStreakGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.StudyStreakFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.StudyStreakGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StudyStreakFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StudyStreakFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.StudyStreakGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.StudyStreakGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.StudyStreakFindManyArgs, TData = Array<Prisma.StudyStreakGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.StudyStreakFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.StudyStreakGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StudyStreakFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StudyStreakFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.StudyStreakGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.StudyStreakGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.StudyStreakFindUniqueArgs, TData = Prisma.StudyStreakGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.StudyStreakFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.StudyStreakGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StudyStreakFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StudyStreakFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.StudyStreakGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.StudyStreakGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.StudyStreakUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudyStreakUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudyStreakUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudyStreakUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.StudyStreakUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudyStreakUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StudyStreakGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StudyStreakGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudyStreakUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudyStreakUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StudyStreakGetPayload<T>, Context>) => Promise<Prisma.StudyStreakGetPayload<T>>
            };

    };
}
