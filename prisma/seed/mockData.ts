import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('dc9cbcad-76df-43dd-8df4-58048ede7c66', '1Tianna_Mertz@hotmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv67890', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('9673147b-c7ac-4071-b552-5feaffbd5a25', '8Margarete.Swaniawski@hotmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=10', 'inv12345', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('3a63f261-1ce5-4f8a-b438-9c22c59ef3dc', '22Vada31@gmail.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=24', 'inv11223', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('91844f9d-6d52-4752-93c2-681e7d90b2e0', '29Erling_Shields76@gmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=31', 'inv78901', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('b2591ad9-b3fc-4950-b1bf-a28e2d728cf3', '36Liam.Yundt@yahoo.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=38', 'inv78901', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('a873054b-5db6-4366-baa2-c6ee21cf0a51', '43Cullen35@gmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inv67890', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('61df26d2-7bf1-404d-93bd-3cb0f875ec2f', '50Dallin75@yahoo.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=52', 'inv11223', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('049e380d-d13c-49aa-8a43-0a6a4f896a50', '57Adella_Swift@hotmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv67890', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('66383596-021a-4231-abd9-7912bca5a907', '64Vance13@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv78901', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Subject" ("id", "name", "iconUrl") VALUES ('c748f6e9-644b-44ac-b946-60933c66f713', 'History', 'https://i.imgur.com/YfJQV5z.png?id=72');
INSERT INTO "Subject" ("id", "name", "iconUrl") VALUES ('7327e2e1-a1c6-4501-a225-c3a5c9702628', 'Science', 'https://i.imgur.com/YfJQV5z.png?id=75');
INSERT INTO "Subject" ("id", "name", "iconUrl") VALUES ('e1328c8b-ce97-4a27-a9bc-25d65f195a30', 'English', 'https://i.imgur.com/YfJQV5z.png?id=78');
INSERT INTO "Subject" ("id", "name", "iconUrl") VALUES ('e7c6a7c4-0c79-4f37-a2a8-2edbd54655f7', 'Mathematics', 'https://i.imgur.com/YfJQV5z.png?id=81');
INSERT INTO "Subject" ("id", "name", "iconUrl") VALUES ('0b518bcb-91c4-496b-a4b6-d7c53762f92f', 'English', 'https://i.imgur.com/YfJQV5z.png?id=84');
INSERT INTO "Subject" ("id", "name", "iconUrl") VALUES ('fbd36f9b-3923-4c0c-bdb5-b456eac27343', 'History', 'https://i.imgur.com/YfJQV5z.png?id=87');
INSERT INTO "Subject" ("id", "name", "iconUrl") VALUES ('4f776235-1501-4144-b72d-e521cae09557', 'English', 'https://i.imgur.com/YfJQV5z.png?id=90');
INSERT INTO "Subject" ("id", "name", "iconUrl") VALUES ('c409a905-3ad0-4e12-988c-d03795609bdc', 'English', 'https://i.imgur.com/YfJQV5z.png?id=93');
INSERT INTO "Subject" ("id", "name", "iconUrl") VALUES ('8e259edc-6648-4a4f-bf08-332fd7b09f66', 'English', 'https://i.imgur.com/YfJQV5z.png?id=96');
INSERT INTO "Subject" ("id", "name", "iconUrl") VALUES ('013c792b-2735-4997-ae65-36fa577ab9dc', 'Mathematics', 'https://i.imgur.com/YfJQV5z.png?id=99');

INSERT INTO "Resource" ("id", "title", "description", "url", "featured", "subjectId") VALUES ('b4a0bb3e-7932-4b9a-a738-88f01e2aaa2f', 'Introduction to World History', 'An overview of significant events and figures in world history.', 'https://i.imgur.com/YfJQV5z.png?id=103', true, '0b518bcb-91c4-496b-a4b6-d7c53762f92f');
INSERT INTO "Resource" ("id", "title", "description", "url", "featured", "subjectId") VALUES ('af2871d5-81fb-4e8d-96c3-89e48fa949e3', 'Mastering Algebra', 'Tips and exercises to enhance your creative writing skills.', 'https://i.imgur.com/YfJQV5z.png?id=108', false, 'fbd36f9b-3923-4c0c-bdb5-b456eac27343');
INSERT INTO "Resource" ("id", "title", "description", "url", "featured", "subjectId") VALUES ('abe0e015-49f2-4515-85e0-c657cccec302', 'Advanced Chemistry Experiments', 'Fundamental principles and concepts of physics explained in simple terms.', 'https://i.imgur.com/YfJQV5z.png?id=113', true, '7327e2e1-a1c6-4501-a225-c3a5c9702628');
INSERT INTO "Resource" ("id", "title", "description", "url", "featured", "subjectId") VALUES ('83859484-7f69-4cce-ba1f-78b696debe80', 'Physics for Beginners', 'Fundamental principles and concepts of physics explained in simple terms.', 'https://i.imgur.com/YfJQV5z.png?id=118', false, '7327e2e1-a1c6-4501-a225-c3a5c9702628');
INSERT INTO "Resource" ("id", "title", "description", "url", "featured", "subjectId") VALUES ('75be570b-26d5-413b-9fc6-7576b9f0640d', 'Physics for Beginners', 'An overview of significant events and figures in world history.', 'https://i.imgur.com/YfJQV5z.png?id=123', true, '013c792b-2735-4997-ae65-36fa577ab9dc');
INSERT INTO "Resource" ("id", "title", "description", "url", "featured", "subjectId") VALUES ('ff05268b-9a78-40a7-b902-405fcf574ea5', 'Advanced Chemistry Experiments', 'An overview of significant events and figures in world history.', 'https://i.imgur.com/YfJQV5z.png?id=128', false, 'c748f6e9-644b-44ac-b946-60933c66f713');
INSERT INTO "Resource" ("id", "title", "description", "url", "featured", "subjectId") VALUES ('ce6177ed-8a50-44de-b749-583496bd1708', 'Creative Writing Techniques', 'Fundamental principles and concepts of physics explained in simple terms.', 'https://i.imgur.com/YfJQV5z.png?id=133', true, '4f776235-1501-4144-b72d-e521cae09557');
INSERT INTO "Resource" ("id", "title", "description", "url", "featured", "subjectId") VALUES ('947fb2a0-4c74-4a09-ac98-590fa1b5c59d', 'Physics for Beginners', 'An overview of significant events and figures in world history.', 'https://i.imgur.com/YfJQV5z.png?id=138', true, '8e259edc-6648-4a4f-bf08-332fd7b09f66');
INSERT INTO "Resource" ("id", "title", "description", "url", "featured", "subjectId") VALUES ('1e903fc2-8769-4f95-a803-b579cf80f656', 'Introduction to World History', 'Comprehensive guide to algebraic concepts and problemsolving techniques.', 'https://i.imgur.com/YfJQV5z.png?id=143', true, 'e1328c8b-ce97-4a27-a9bc-25d65f195a30');
INSERT INTO "Resource" ("id", "title", "description", "url", "featured", "subjectId") VALUES ('e9f733b1-433e-464c-8c70-2181e79b371e', 'Mastering Algebra', 'Tips and exercises to enhance your creative writing skills.', 'https://i.imgur.com/YfJQV5z.png?id=148', false, '8e259edc-6648-4a4f-bf08-332fd7b09f66');

INSERT INTO "DailyUpdate" ("id", "title", "content", "date") VALUES ('c620cc00-eb14-4c68-865f-56db4030d616', 'Science Fair Winners Announced', 'New literature study guides have been added to help you with your reading assignments. Find them in the Featured Resources area.', '2023-09-23T15:07:02.685Z');
INSERT INTO "DailyUpdate" ("id", "title", "content", "date") VALUES ('f0a0d63e-8613-47ee-9aae-c9bcfcbf7f2b', 'Upcoming History Quiz', 'Join us for the weekly sports activities every Wednesday. Check the Daily Diary for more details and signup information.', '2024-05-19T03:18:21.647Z');
INSERT INTO "DailyUpdate" ("id", "title", "content", "date") VALUES ('2a6f3bb0-c327-4735-b6b2-ff11a9067c12', 'Upcoming History Quiz', 'Congratulations to the winners of the Science Fair Visit the Daily Diary to see the list of winners and their projects.', '2023-12-23T11:15:24.583Z');
INSERT INTO "DailyUpdate" ("id", "title", "content", "date") VALUES ('4a1ecf1c-00c9-4f01-8f17-fc355e3e518d', 'Upcoming History Quiz', 'Check out the latest math practice sheets to help you prepare for your exams. Available now in the Resources section.', '2024-12-12T13:08:27.650Z');
INSERT INTO "DailyUpdate" ("id", "title", "content", "date") VALUES ('1360f207-e00e-4e0a-bb72-25f783d4911b', 'New Literature Study Guides', 'Congratulations to the winners of the Science Fair Visit the Daily Diary to see the list of winners and their projects.', '2024-06-23T21:02:48.187Z');
INSERT INTO "DailyUpdate" ("id", "title", "content", "date") VALUES ('e6e947c3-24f1-4247-9fde-cde69ef31cad', 'Upcoming History Quiz', 'Join us for the weekly sports activities every Wednesday. Check the Daily Diary for more details and signup information.', '2025-07-04T08:55:53.497Z');
INSERT INTO "DailyUpdate" ("id", "title", "content", "date") VALUES ('de7f3835-fae8-4c63-8808-ed8737ab1708', 'Science Fair Winners Announced', 'Check out the latest math practice sheets to help you prepare for your exams. Available now in the Resources section.', '2024-01-23T10:39:21.701Z');
INSERT INTO "DailyUpdate" ("id", "title", "content", "date") VALUES ('24390b9a-9979-4cc6-82dc-8f4e7f6c917a', 'Science Fair Winners Announced', 'Congratulations to the winners of the Science Fair Visit the Daily Diary to see the list of winners and their projects.', '2025-08-10T21:46:54.169Z');
INSERT INTO "DailyUpdate" ("id", "title", "content", "date") VALUES ('1c4be5a9-7f71-4ab1-abd4-9d5a2e0cd2da', 'Upcoming History Quiz', 'Congratulations to the winners of the Science Fair Visit the Daily Diary to see the list of winners and their projects.', '2025-04-30T08:57:23.324Z');
INSERT INTO "DailyUpdate" ("id", "title", "content", "date") VALUES ('693caaf2-99ef-44b2-a177-8401146fa928', 'New Literature Study Guides', 'New literature study guides have been added to help you with your reading assignments. Find them in the Featured Resources area.', '2024-10-06T15:08:29.214Z');

INSERT INTO "GradeLevel" ("id", "name") VALUES ('207d3c66-b8b0-44e6-8cf6-4ab3f2e02399', 'Grade 7');
INSERT INTO "GradeLevel" ("id", "name") VALUES ('dea02bbd-a47c-4099-b938-3afcd16841d4', 'Grade 10');
INSERT INTO "GradeLevel" ("id", "name") VALUES ('62eee89f-f54e-4468-979d-f7fb962b796e', 'Grade 8');
INSERT INTO "GradeLevel" ("id", "name") VALUES ('cca28c54-17ac-4feb-92fe-3b6bb81450f1', 'Grade 6');
INSERT INTO "GradeLevel" ("id", "name") VALUES ('5d19058c-5be8-4411-a5ab-4a1e32f3b441', 'Grade 8');
INSERT INTO "GradeLevel" ("id", "name") VALUES ('baf64ce6-818f-45e8-a403-73385a48aabc', 'Grade 8');
INSERT INTO "GradeLevel" ("id", "name") VALUES ('a409b17b-69f9-4194-a8a1-4ccf4b1ecd40', 'Grade 7');
INSERT INTO "GradeLevel" ("id", "name") VALUES ('a85f2759-2a34-4c35-802c-c06995010fc5', 'Grade 10');
INSERT INTO "GradeLevel" ("id", "name") VALUES ('e92b27bc-b8f7-4ba3-95ce-947462f6a64e', 'Grade 10');
INSERT INTO "GradeLevel" ("id", "name") VALUES ('4c14377e-370b-433c-9c68-d9a250ba9e78', 'Grade 6');

INSERT INTO "UserGradeLevel" ("id", "userId", "gradeLevelId") VALUES ('5fdaab7b-9eb8-45d2-ae09-89200d72eec7', '9673147b-c7ac-4071-b552-5feaffbd5a25', 'dea02bbd-a47c-4099-b938-3afcd16841d4');
INSERT INTO "UserGradeLevel" ("id", "userId", "gradeLevelId") VALUES ('95fd56c8-0cee-4eee-a063-3a903f97b6fd', '91844f9d-6d52-4752-93c2-681e7d90b2e0', 'a85f2759-2a34-4c35-802c-c06995010fc5');
INSERT INTO "UserGradeLevel" ("id", "userId", "gradeLevelId") VALUES ('714dd367-2aa4-48b3-a23d-53400e68bf87', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '62eee89f-f54e-4468-979d-f7fb962b796e');
INSERT INTO "UserGradeLevel" ("id", "userId", "gradeLevelId") VALUES ('2634ed31-ea87-4066-b766-96f713cc3e10', '3a63f261-1ce5-4f8a-b438-9c22c59ef3dc', '207d3c66-b8b0-44e6-8cf6-4ab3f2e02399');
INSERT INTO "UserGradeLevel" ("id", "userId", "gradeLevelId") VALUES ('12073cf9-3e0d-4e3f-8770-81b8c9b6b5fd', 'a873054b-5db6-4366-baa2-c6ee21cf0a51', '62eee89f-f54e-4468-979d-f7fb962b796e');
INSERT INTO "UserGradeLevel" ("id", "userId", "gradeLevelId") VALUES ('cfcb8214-4226-437e-b898-b00970bd70d5', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '4c14377e-370b-433c-9c68-d9a250ba9e78');
INSERT INTO "UserGradeLevel" ("id", "userId", "gradeLevelId") VALUES ('78c4ac29-ea90-4d6b-b85e-f32ff480a6f5', 'a873054b-5db6-4366-baa2-c6ee21cf0a51', 'baf64ce6-818f-45e8-a403-73385a48aabc');
INSERT INTO "UserGradeLevel" ("id", "userId", "gradeLevelId") VALUES ('6757cafc-4768-4fea-acb4-2ca48fdf9329', '91844f9d-6d52-4752-93c2-681e7d90b2e0', 'baf64ce6-818f-45e8-a403-73385a48aabc');
INSERT INTO "UserGradeLevel" ("id", "userId", "gradeLevelId") VALUES ('e7a88711-8b41-4eba-85a7-d1ce2d28a58c', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a409b17b-69f9-4194-a8a1-4ccf4b1ecd40');
INSERT INTO "UserGradeLevel" ("id", "userId", "gradeLevelId") VALUES ('74a9ba0a-7440-40dc-ba5a-f03944f6ef48', '61df26d2-7bf1-404d-93bd-3cb0f875ec2f', '62eee89f-f54e-4468-979d-f7fb962b796e');

INSERT INTO "StudyStreak" ("id", "startDate", "endDate", "userId") VALUES ('7c3af2f5-3f58-4d18-b027-04fd77afa7dd', '2025-01-28T17:45:31.991Z', '2024-05-04T22:29:50.711Z', '66383596-021a-4231-abd9-7912bca5a907');
INSERT INTO "StudyStreak" ("id", "startDate", "endDate", "userId") VALUES ('cc6adfb5-e1ea-4e54-8052-795117277eee', '2023-11-10T15:45:50.856Z', '2024-08-24T07:31:28.845Z', 'dc9cbcad-76df-43dd-8df4-58048ede7c66');
INSERT INTO "StudyStreak" ("id", "startDate", "endDate", "userId") VALUES ('df1c1a8b-f707-4952-bb33-a759590c5d93', '2024-05-23T06:50:36.088Z', '2025-07-31T05:25:43.163Z', '049e380d-d13c-49aa-8a43-0a6a4f896a50');
INSERT INTO "StudyStreak" ("id", "startDate", "endDate", "userId") VALUES ('08179f38-486f-4d45-b158-a81382d87fec', '2024-10-03T06:28:44.119Z', '2025-02-08T19:37:12.943Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "StudyStreak" ("id", "startDate", "endDate", "userId") VALUES ('5eaab651-a816-46c4-99b1-74f04d35b86f', '2024-12-28T17:42:49.328Z', '2024-03-03T05:22:39.299Z', 'a873054b-5db6-4366-baa2-c6ee21cf0a51');
INSERT INTO "StudyStreak" ("id", "startDate", "endDate", "userId") VALUES ('fbb62175-51a3-4bb8-a28a-a8e743c84a1d', '2025-03-06T03:31:11.420Z', '2023-10-25T03:58:24.464Z', '66383596-021a-4231-abd9-7912bca5a907');
INSERT INTO "StudyStreak" ("id", "startDate", "endDate", "userId") VALUES ('2868b542-b38c-42db-89e5-9771e6f408f2', '2023-11-19T13:01:50.365Z', '2024-06-21T10:48:39.113Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "StudyStreak" ("id", "startDate", "endDate", "userId") VALUES ('7a0d22b7-d5b4-4a37-b751-89fbb738507c', '2025-03-24T09:44:17.889Z', '2025-04-22T02:11:46.744Z', 'dc9cbcad-76df-43dd-8df4-58048ede7c66');
INSERT INTO "StudyStreak" ("id", "startDate", "endDate", "userId") VALUES ('ade9b46c-e568-4a40-8b58-56fadb534328', '2024-06-03T16:43:09.828Z', '2024-03-22T23:44:29.875Z', 'b2591ad9-b3fc-4950-b1bf-a28e2d728cf3');
INSERT INTO "StudyStreak" ("id", "startDate", "endDate", "userId") VALUES ('bc4c3fbf-e32e-4fa4-8342-661d9e225e8a', '2025-07-02T20:29:58.249Z', '2024-11-27T14:48:14.437Z', '9673147b-c7ac-4071-b552-5feaffbd5a25');

INSERT INTO "DailyDiary" ("id", "entryDate", "content", "userId") VALUES ('57e11be7-77d9-47e6-bf68-e748943e54d0', '2024-01-30T10:43:55.465Z', 'Attended the science webinar on renewable energy.', '049e380d-d13c-49aa-8a43-0a6a4f896a50');
INSERT INTO "DailyDiary" ("id", "entryDate", "content", "userId") VALUES ('674dcb97-56ab-4008-b938-21db22b2d0e1', '2024-08-28T12:40:11.766Z', 'Practiced English essay writing on environmental issues.', '3a63f261-1ce5-4f8a-b438-9c22c59ef3dc');
INSERT INTO "DailyDiary" ("id", "entryDate", "content", "userId") VALUES ('a5864386-76b8-4709-b67b-609326e09ab2', '2024-04-02T21:26:18.549Z', 'Completed math homework on algebraic expressions.', 'dc9cbcad-76df-43dd-8df4-58048ede7c66');
INSERT INTO "DailyDiary" ("id", "entryDate", "content", "userId") VALUES ('fa64d46b-b886-437c-a664-da417d3a7227', '2024-07-03T07:56:05.194Z', 'Practiced English essay writing on environmental issues.', '9673147b-c7ac-4071-b552-5feaffbd5a25');
INSERT INTO "DailyDiary" ("id", "entryDate", "content", "userId") VALUES ('fe752934-1765-4af5-ad4a-fd98df6d0c25', '2025-03-11T09:48:18.519Z', 'Practiced English essay writing on environmental issues.', '9673147b-c7ac-4071-b552-5feaffbd5a25');
INSERT INTO "DailyDiary" ("id", "entryDate", "content", "userId") VALUES ('49c0815c-7bba-4e41-9455-29849d0e6acf', '2024-12-02T13:27:14.285Z', 'Attended the science webinar on renewable energy.', 'dc9cbcad-76df-43dd-8df4-58048ede7c66');
INSERT INTO "DailyDiary" ("id", "entryDate", "content", "userId") VALUES ('c8fdba23-9343-4f8c-9bce-485c221806a3', '2024-03-10T13:58:55.451Z', 'Attended the science webinar on renewable energy.', '66383596-021a-4231-abd9-7912bca5a907');
INSERT INTO "DailyDiary" ("id", "entryDate", "content", "userId") VALUES ('9554fe5c-ed7b-4edb-94e0-4feccb452424', '2025-06-21T07:28:57.780Z', 'Read chapter 3 of the history textbook on ancient civilizations.', '3a63f261-1ce5-4f8a-b438-9c22c59ef3dc');
INSERT INTO "DailyDiary" ("id", "entryDate", "content", "userId") VALUES ('0c0f9186-e823-483b-9403-69e397310615', '2024-02-29T22:55:05.712Z', 'Completed math homework on algebraic expressions.', '61df26d2-7bf1-404d-93bd-3cb0f875ec2f');
INSERT INTO "DailyDiary" ("id", "entryDate", "content", "userId") VALUES ('1c894c04-476b-40de-8d2e-dd0016ec9e8d', '2025-05-29T01:27:10.119Z', 'Participated in the online quiz for geography.', 'dc9cbcad-76df-43dd-8df4-58048ede7c66');

INSERT INTO "SearchHistory" ("id", "searchTerm", "searchDate", "userId") VALUES ('5f7836a5-729b-471f-9eba-04d1b09d12b3', 'Newtons laws of motion', '2025-01-15T16:40:43.145Z', '66383596-021a-4231-abd9-7912bca5a907');
INSERT INTO "SearchHistory" ("id", "searchTerm", "searchDate", "userId") VALUES ('aa282137-ef46-46b3-ab8c-e9146203d0e2', 'Newtons laws of motion', '2024-08-03T16:34:35.668Z', '3a63f261-1ce5-4f8a-b438-9c22c59ef3dc');
INSERT INTO "SearchHistory" ("id", "searchTerm", "searchDate", "userId") VALUES ('23897e24-8019-4579-b427-b620a34875d6', 'algebra equations', '2024-11-18T22:22:09.408Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "SearchHistory" ("id", "searchTerm", "searchDate", "userId") VALUES ('efa5d366-7c3a-45ff-bfb5-a057a7ae08f9', 'world war 2', '2025-06-15T15:00:19.240Z', '61df26d2-7bf1-404d-93bd-3cb0f875ec2f');
INSERT INTO "SearchHistory" ("id", "searchTerm", "searchDate", "userId") VALUES ('6bfc6cc9-9623-432d-8ac3-d9e7e2660de0', 'Shakespeares plays', '2025-02-26T21:07:28.026Z', 'a873054b-5db6-4366-baa2-c6ee21cf0a51');
INSERT INTO "SearchHistory" ("id", "searchTerm", "searchDate", "userId") VALUES ('67b01b57-f3cd-4d83-ba33-1c751e811bc4', 'algebra equations', '2023-10-28T07:11:17.369Z', 'b2591ad9-b3fc-4950-b1bf-a28e2d728cf3');
INSERT INTO "SearchHistory" ("id", "searchTerm", "searchDate", "userId") VALUES ('c2871f45-eb69-406a-af70-d64f35a93948', 'Newtons laws of motion', '2025-04-19T05:46:08.707Z', 'b2591ad9-b3fc-4950-b1bf-a28e2d728cf3');
INSERT INTO "SearchHistory" ("id", "searchTerm", "searchDate", "userId") VALUES ('17a5bc36-9ff1-4b57-9a94-532844fb9f02', 'photosynthesis process', '2025-08-23T14:15:12.230Z', '3a63f261-1ce5-4f8a-b438-9c22c59ef3dc');
INSERT INTO "SearchHistory" ("id", "searchTerm", "searchDate", "userId") VALUES ('9c138fce-adf5-46eb-b37b-68932100ba97', 'world war 2', '2025-02-23T00:59:48.856Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "SearchHistory" ("id", "searchTerm", "searchDate", "userId") VALUES ('98ae4df9-28f7-474f-9705-3193dbcf4dbd', 'photosynthesis process', '2023-09-09T08:41:25.880Z', '9673147b-c7ac-4071-b552-5feaffbd5a25');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
