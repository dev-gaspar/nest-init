export const RESPONSE_REGISTER_201 = {
  statusCode: 201,
  timestamp: '2025-02-26T18:30:25.873Z',
  success: true,
  message: 'User registered successfully',
  data: {
    id: '28a837e3-7cb4-4003-b34c-a3d9a3793961',
    email: 'example@example.com',
    password: '$2b$10$XOiNDT2tdAsTZfGGdt6dHurfoDhHhC6RAnUI3nRUD8HA00va3l0XS',
    role: 'USER',
    globalStatus: 'ACTIVE',
    createdAt: '2025-02-26T18:30:25.846Z',
    updatedAt: '2025-02-26T18:30:25.846Z',
  },
};

export const RESPONSE_REGISTER_401 = {
  statusCode: 401,
  timestamp: '2025-02-26T18:37:51.211Z',
  success: false,
  message: 'Algo salió mal.',
  errors: ['El correo electrónico ya está en uso'],
};

export const RESPONSE_LOGIN_201 = {
  statusCode: 201,
  timestamp: '2025-02-26T18:41:23.780Z',
  success: true,
  message: 'User logged in successfully',
  data: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyOGE4MzdlMy03Y2I0LTQwMDMtYjM0Yy1hM2Q5YTM3OTM5NjEiLCJlbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc0MDU5NTI4MywiZXhwIjoxNzQwNjgxNjgzfQ.ay6dP96eXdVhVnnOrRseOaotoURBsHODmXRqPYQVrFU',
    user: {
      id: '28a837e3-7cb4-4003-b34c-a3d9a3793961',
      email: 'example@example.com',
      password: '$2b$10$XOiNDT2tdAsTZfGGdt6dHurfoDhHhC6RAnUI3nRUD8HA00va3l0XS',
      role: 'USER',
      globalStatus: 'ACTIVE',
      createdAt: '2025-02-26T18:30:25.846Z',
      updatedAt: '2025-02-26T18:30:25.846Z',
    },
  },
};

export const RESPONSE_LOGIN_401 = {
  statusCode: 401,
  timestamp: '2025-02-26T18:45:20.970Z',
  success: false,
  message: 'Algo salió mal.',
  errors: ['Credenciales inválidas'],
};

export const RESPONSE_ME_200 = {
  statusCode: 200,
  timestamp: '2025-02-26T18:55:39.046Z',
  success: true,
  message: 'User details retrieved successfully',
  data: {
    id: '28a837e3-7cb4-4003-b34c-a3d9a3793961',
    email: 'example@example.com',
    password: '$2b$10$XOiNDT2tdAsTZfGGdt6dHurfoDhHhC6RAnUI3nRUD8HA00va3l0XS',
    role: 'USER',
    globalStatus: 'ACTIVE',
    createdAt: '2025-02-26T18:30:25.846Z',
    updatedAt: '2025-02-26T18:30:25.846Z',
  },
};

export const RESPONSE_ME_401 = {
  statusCode: 401,
  timestamp: '2025-02-26T18:58:05.479Z',
  success: false,
  message: 'Algo salió mal.',
  errors: ['Unauthorized'],
};

export const RESPONSE_USER_201 = {
  statusCode: 201,
  timestamp: '2025-03-01T08:18:57.627Z',
  success: true,
  message: 'Usuario registrado correctamente',
  data: {
    id: '679e66eb-e3b1-4b72-b12f-23fa5a0b5329',
    email: 'example@example.com',
    password: '$2b$10$9Hr9u77gQtb99mSC8Vz4Fu/l7YJzPH3SO8NuGijBRm1lWKu54rJ9y',
    personId: 'b6ebc39c-a052-44d2-bb68-0d0bb33d7016',
    role: 'USER',
    globalStatus: 'ACTIVE',
    createdAt: '2025-03-01T08:18:57.622Z',
    updatedAt: '2025-03-01T08:18:57.622Z',
  },
};

export const RESPONSE_OWNER_409 = {
  statusCode: 409,
  timestamp: '2025-03-01T08:25:30.606Z',
  success: false,
  message: 'Algo salió mal.',
  errors: [
    'Violación de restricción única en el campo email. El registro ya existe.',
  ],
};

export const REPONSE_FIND_ALL_USER_200 = {
  statusCode: 200,
  timestamp: '2025-03-02T00:36:19.227Z',
  success: true,
  message: 'OK',
  data: [
    {
      id: '591f9427-f501-4a2b-9acb-662ccbab6c0b',
      email: 'anfesugo22@gmail.com',
      password: '$2b$10$83WHVDqFmdfcR0f3MyhfruXJusUJcHjGNGy0hlbtJrwnAi1yCmzwK',
      personId: '2cd3713d-c630-4bb0-8a3b-d6b5a61ea24c',
      role: 'OWNER',
      globalStatus: 'ACTIVE',
      createdAt: '2025-03-01T21:19:32.292Z',
      updatedAt: '2025-03-01T21:19:32.292Z',
      person: {
        id: '2cd3713d-c630-4bb0-8a3b-d6b5a61ea24c',
        names: 'Andres Felipe',
        lastNames: 'Suarez Gonzalez',
        email: 'anfesugo22@gmail.com',
        phone: '3012345678',
        cretedAt: '2025-03-01T21:19:32.259Z',
        updatedAt: '2025-03-01T21:19:32.259Z',
        globalStatus: 'ACTIVE',
      },
    },
    {
      id: 'a0f42a5b-cfcb-4b10-b3a4-73aa306b8066',
      email: 'admin@miparqueo.com',
      password: '$2b$10$83WHVDqFmdfcR0f3MyhfruXJusUJcHjGNGy0hlbtJrwnAi1yCmzwK',
      personId: null,
      role: 'ADMIN',
      globalStatus: 'ACTIVE',
      createdAt: '2025-03-01T21:19:32.325Z',
      updatedAt: '2025-03-01T21:19:32.325Z',
      person: null,
    },
    {
      id: '56d4ba97-79fb-4747-acba-569cfd3f3748',
      email: 'example@example.com',
      password: '$2b$10$PjgPsZj9Fm53sC92dYzMOO1gZD6oVHdZhOcdgMPGH8cZISBoueOTq',
      personId: '8f7c5d91-12c9-4953-94e6-5c4fc8f4cdaf',
      role: 'USER',
      globalStatus: 'ACTIVE',
      createdAt: '2025-03-01T21:28:38.349Z',
      updatedAt: '2025-03-01T21:28:38.349Z',
      person: {
        id: '8f7c5d91-12c9-4953-94e6-5c4fc8f4cdaf',
        names: 'Andres Felipe',
        lastNames: 'Suarez Gonzalez',
        email: 'example@example.com',
        phone: '3012345678',
        cretedAt: '2025-03-01T21:28:38.215Z',
        updatedAt: '2025-03-01T21:28:38.215Z',
        globalStatus: 'ACTIVE',
      },
    },
  ],
};

export const RESPONSE_FIND_ONE_USER_200 = {
  statusCode: 200,
  timestamp: '2025-03-02T00:27:25.266Z',
  success: true,
  message: 'Usuario encontrado',
  data: {
    id: '591f9427-f501-4a2b-9acb-662ccbab6c0b',
    email: 'anfesugo22@gmail.com',
    password: '$2b$10$83WHVDqFmdfcR0f3MyhfruXJusUJcHjGNGy0hlbtJrwnAi1yCmzwK',
    personId: '2cd3713d-c630-4bb0-8a3b-d6b5a61ea24c',
    role: 'OWNER',
    globalStatus: 'ACTIVE',
    createdAt: '2025-03-01T21:19:32.292Z',
    updatedAt: '2025-03-01T21:19:32.292Z',
    person: {
      id: '2cd3713d-c630-4bb0-8a3b-d6b5a61ea24c',
      names: 'Andres Felipe',
      lastNames: 'Suarez Gonzalez',
      email: 'anfesugo22@gmail.com',
      phone: '3012345678',
      cretedAt: '2025-03-01T21:19:32.259Z',
      updatedAt: '2025-03-01T21:19:32.259Z',
      globalStatus: 'ACTIVE',
    },
  },
};

export const RESPONSE_UPDATE_USER_200 = {
  statusCode: 200,
  timestamp: '2025-03-02T06:53:42.914Z',
  success: true,
  message: 'Usuario actualizado',
  data: {
    id: '2cd3713d-c630-4bb0-8a3b-d6b5a61ea24c',
    names: 'TOMMY CHAN',
    lastNames: 'Suarez Gonzalez',
    email: 'anfesugo22@gmail.com',
    phone: '3012345678',
    cretedAt: '2025-03-01T21:19:32.259Z',
    updatedAt: '2025-03-02T06:53:42.905Z',
    globalStatus: 'ACTIVE',
    user: {
      id: '591f9427-f501-4a2b-9acb-662ccbab6c0b',
      email: 'anfesugo22@gmail.com',
      password: '$2b$10$83WHVDqFmdfcR0f3MyhfruXJusUJcHjGNGy0hlbtJrwnAi1yCmzwK',
      personId: '2cd3713d-c630-4bb0-8a3b-d6b5a61ea24c',
      role: 'OWNER',
      globalStatus: 'ACTIVE',
      createdAt: '2025-03-01T21:19:32.292Z',
      updatedAt: '2025-03-01T21:19:32.292Z',
    },
  },
};

export const RESPONSE_UPDATE_PASSWORD_200 = {
  statusCode: 200,
  timestamp: '2025-03-02T07:03:51.476Z',
  success: true,
  message: 'OK',
  data: {
    id: '591f9427-f501-4a2b-9acb-662ccbab6c0b',
    email: 'anfesugo22@gmail.com',
    password: '$2b$10$2HQ0resvdzck7qzcTXCtiOUY5lswVA7GSmNKJNM6G9/OtsfQ1NBs2',
    personId: '2cd3713d-c630-4bb0-8a3b-d6b5a61ea24c',
    role: 'OWNER',
    globalStatus: 'ACTIVE',
    createdAt: '2025-03-01T21:19:32.292Z',
    updatedAt: '2025-03-02T07:03:51.439Z',
    person: {
      id: '2cd3713d-c630-4bb0-8a3b-d6b5a61ea24c',
      names: 'TOMMY CHAN',
      lastNames: 'Suarez Gonzalez',
      email: 'anfesugo22@gmail.com',
      phone: '3012345678',
      cretedAt: '2025-03-01T21:19:32.259Z',
      updatedAt: '2025-03-02T06:53:42.905Z',
      globalStatus: 'ACTIVE',
    },
  },
};

export const REPONSE_DELETE_USER_200 = {
  statusCode: 200,
  timestamp: '2025-03-02T07:31:00.772Z',
  success: true,
  message: 'Usuario eliminado',
};
