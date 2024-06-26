import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::permission', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::permission', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> & Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<'admin::role', 'oneToMany', 'admin::permission'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<'admin::api-token', 'oneToMany', 'admin::api-token-permission'>;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::api-token', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::api-token', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<'admin::api-token-permission', 'manyToOne', 'admin::api-token'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::transfer-token', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::transfer-token', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::transfer-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::transfer-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<'plugin::upload.file', 'manyToOne', 'plugin::upload.folder'> &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'plugin::upload.file', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'plugin::upload.file', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<'plugin::upload.folder', 'manyToOne', 'plugin::upload.folder'>;
    children: Attribute.Relation<'plugin::upload.folder', 'oneToMany', 'plugin::upload.folder'>;
    files: Attribute.Relation<'plugin::upload.folder', 'oneToMany', 'plugin::upload.file'>;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'plugin::upload.folder', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'plugin::upload.folder', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'plugin::content-releases.release', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'plugin::content-releases.release', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<'plugin::content-releases.release-action', 'morphToOne'>;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'plugin::i18n.locale', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'plugin::i18n.locale', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiAddressAddress extends Schema.CollectionType {
  collectionName: 'addresses';
  info: {
    singularName: 'address';
    pluralName: 'addresses';
    displayName: 'Address';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    street: Attribute.String;
    block: Attribute.String;
    voters: Attribute.Relation<'api::address.address', 'oneToMany', 'api::voter.voter'>;
    city: Attribute.Relation<'api::address.address', 'oneToOne', 'api::city.city'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::address.address', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::address.address', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCandidateCandidate extends Schema.CollectionType {
  collectionName: 'candidates';
  info: {
    singularName: 'candidate';
    pluralName: 'candidates';
    displayName: 'Candidate';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.Text;
    job: Attribute.String;
    civilId: Attribute.BigInteger;
    nationalityNumber: Attribute.BigInteger;
    scheduleNumber: Attribute.String;
    gender: Attribute.Enumeration<['male', 'female']>;
    mobile: Attribute.Integer;
    familyName: Attribute.String;
    sector: Attribute.Relation<'api::candidate.candidate', 'manyToOne', 'api::sector.sector'>;
    cities: Attribute.Relation<'api::candidate.candidate', 'manyToMany', 'api::city.city'>;
    tribe: Attribute.Relation<'api::candidate.candidate', 'manyToOne', 'api::tribe.tribe'>;
    committees: Attribute.Relation<
      'api::candidate.candidate',
      'manyToMany',
      'api::committee.committee'
    >;
    name1: Attribute.String;
    name2: Attribute.String;
    name3: Attribute.String;
    name4: Attribute.String;
    schools: Attribute.Relation<'api::candidate.candidate', 'manyToMany', 'api::school.school'>;
    registrationNum: Attribute.BigInteger & Attribute.Unique;
    voters: Attribute.Relation<'api::candidate.candidate', 'oneToMany', 'api::voter.voter'>;
    letter: Attribute.Relation<'api::candidate.candidate', 'manyToOne', 'api::letter.letter'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::candidate.candidate', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::candidate.candidate', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCityCity extends Schema.CollectionType {
  collectionName: 'cities';
  info: {
    singularName: 'city';
    pluralName: 'cities';
    displayName: 'city';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    sector: Attribute.Relation<'api::city.city', 'manyToOne', 'api::sector.sector'>;
    voters: Attribute.Relation<'api::city.city', 'oneToMany', 'api::voter.voter'>;
    address: Attribute.Relation<'api::city.city', 'oneToOne', 'api::address.address'>;
    committees: Attribute.Relation<'api::city.city', 'oneToMany', 'api::committee.committee'>;
    schooldId: Attribute.Integer;
    schools: Attribute.Relation<'api::city.city', 'manyToMany', 'api::school.school'>;
    candidates: Attribute.Relation<'api::city.city', 'manyToMany', 'api::candidate.candidate'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface ApiCommitteeCommittee extends Schema.CollectionType {
  collectionName: 'committees';
  info: {
    singularName: 'committee';
    pluralName: 'committees';
    displayName: 'committee';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    voters: Attribute.Relation<'api::committee.committee', 'oneToMany', 'api::voter.voter'>;
    type: Attribute.Enumeration<['main', 'sub']>;
    number: Attribute.Integer;
    city: Attribute.Relation<'api::committee.committee', 'manyToOne', 'api::city.city'>;
    school: Attribute.Relation<'api::committee.committee', 'manyToOne', 'api::school.school'>;
    gender: Attribute.Enumeration<['male', 'female']>;
    letters: Attribute.Relation<'api::committee.committee', 'oneToMany', 'api::letter.letter'>;
    sectorId: Attribute.Integer;
    sector: Attribute.Relation<'api::committee.committee', 'manyToOne', 'api::sector.sector'>;
    candidates: Attribute.Relation<
      'api::committee.committee',
      'manyToMany',
      'api::candidate.candidate'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::committee.committee', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::committee.committee', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiLetterLetter extends Schema.CollectionType {
  collectionName: 'letters';
  info: {
    singularName: 'letter';
    pluralName: 'letters';
    displayName: 'Letter';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    school: Attribute.Relation<'api::letter.letter', 'manyToOne', 'api::school.school'>;
    committee: Attribute.Relation<'api::letter.letter', 'manyToOne', 'api::committee.committee'>;
    voters: Attribute.Relation<'api::letter.letter', 'oneToMany', 'api::voter.voter'>;
    candidates: Attribute.Relation<'api::letter.letter', 'oneToMany', 'api::candidate.candidate'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::letter.letter', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::letter.letter', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiSchoolSchool extends Schema.CollectionType {
  collectionName: 'schools';
  info: {
    singularName: 'school';
    pluralName: 'schools';
    displayName: 'school';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    voters: Attribute.Relation<'api::school.school', 'oneToMany', 'api::voter.voter'>;
    letters: Attribute.Relation<'api::school.school', 'oneToMany', 'api::letter.letter'>;
    cities: Attribute.Relation<'api::school.school', 'manyToMany', 'api::city.city'>;
    gender: Attribute.Enumeration<['male', 'female']>;
    committees: Attribute.Relation<'api::school.school', 'oneToMany', 'api::committee.committee'>;
    sector: Attribute.Relation<'api::school.school', 'manyToOne', 'api::sector.sector'>;
    candidates: Attribute.Relation<'api::school.school', 'manyToMany', 'api::candidate.candidate'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::school.school', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::school.school', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiSectorSector extends Schema.CollectionType {
  collectionName: 'sectors';
  info: {
    singularName: 'sector';
    pluralName: 'sectors';
    displayName: 'Sector';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.Enumeration<
      [
        '\u0627\u0644\u0623\u0648\u0644\u0649',
        '\u0627\u0644\u062B\u0627\u0646\u064A\u0629',
        '\u0627\u0644\u062B\u0627\u0644\u062B\u0629',
        '\u0627\u0644\u0631\u0627\u0628\u0639\u0629',
        '\u0627\u0644\u062E\u0627\u0645\u0633\u0629'
      ]
    >;
    number: Attribute.Integer;
    tribes: Attribute.Relation<'api::sector.sector', 'oneToMany', 'api::tribe.tribe'>;
    voters: Attribute.Relation<'api::sector.sector', 'oneToMany', 'api::voter.voter'>;
    cities: Attribute.Relation<'api::sector.sector', 'oneToMany', 'api::city.city'>;
    candidates: Attribute.Relation<'api::sector.sector', 'oneToMany', 'api::candidate.candidate'>;
    schools: Attribute.Relation<'api::sector.sector', 'oneToMany', 'api::school.school'>;
    committees: Attribute.Relation<'api::sector.sector', 'oneToMany', 'api::committee.committee'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::sector.sector', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::sector.sector', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiSubTribeSubTribe extends Schema.CollectionType {
  collectionName: 'sub_tribes';
  info: {
    singularName: 'sub-tribe';
    pluralName: 'sub-tribes';
    displayName: 'SubTribe';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    tribe: Attribute.Relation<'api::sub-tribe.sub-tribe', 'oneToOne', 'api::tribe.tribe'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::sub-tribe.sub-tribe', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::sub-tribe.sub-tribe', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTribeTribe extends Schema.CollectionType {
  collectionName: 'tribes';
  info: {
    singularName: 'tribe';
    pluralName: 'tribes';
    displayName: 'Tribe';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    sub_tribe: Attribute.Relation<'api::tribe.tribe', 'oneToOne', 'api::sub-tribe.sub-tribe'>;
    candidates: Attribute.Relation<'api::tribe.tribe', 'oneToMany', 'api::candidate.candidate'>;
    voters: Attribute.Relation<'api::tribe.tribe', 'oneToMany', 'api::voter.voter'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tribe.tribe', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::tribe.tribe', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiVoterVoter extends Schema.CollectionType {
  collectionName: 'voters';
  info: {
    singularName: 'voter';
    pluralName: 'voters';
    displayName: 'voter';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    nationalityNumber: Attribute.BigInteger;
    isVoted: Attribute.Boolean & Attribute.DefaultTo<false>;
    isAllowed: Attribute.Boolean & Attribute.DefaultTo<true>;
    scheduleNumber: Attribute.String;
    mobile: Attribute.Integer;
    familyName: Attribute.String;
    gender: Attribute.Enumeration<['male', 'female']>;
    sector: Attribute.Relation<'api::voter.voter', 'manyToOne', 'api::sector.sector'>;
    school: Attribute.Relation<'api::voter.voter', 'manyToOne', 'api::school.school'>;
    status: Attribute.Enumeration<['Allowed', 'Stopped', 'NotAllowed']> &
      Attribute.DefaultTo<'Allowed'>;
    registrationNum: Attribute.BigInteger & Attribute.Unique;
    tribe: Attribute.Relation<'api::voter.voter', 'manyToOne', 'api::tribe.tribe'>;
    committee: Attribute.Relation<'api::voter.voter', 'manyToOne', 'api::committee.committee'>;
    city: Attribute.Relation<'api::voter.voter', 'manyToOne', 'api::city.city'>;
    name1: Attribute.String;
    name2: Attribute.String;
    name3: Attribute.String;
    name4: Attribute.String;
    address: Attribute.Relation<'api::voter.voter', 'manyToOne', 'api::address.address'>;
    isGuaranteed: Attribute.Boolean & Attribute.DefaultTo<false>;
    age: Attribute.String;
    candidate: Attribute.Relation<'api::voter.voter', 'manyToOne', 'api::candidate.candidate'>;
    guaranteedCandidateId: Attribute.Integer & Attribute.Unique;
    letter: Attribute.String;
    scheduleName: Attribute.String;
    sectorId: Attribute.Integer;
    letterId: Attribute.Relation<'api::voter.voter', 'manyToOne', 'api::letter.letter'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::voter.voter', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::voter.voter', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::address.address': ApiAddressAddress;
      'api::candidate.candidate': ApiCandidateCandidate;
      'api::city.city': ApiCityCity;
      'api::committee.committee': ApiCommitteeCommittee;
      'api::letter.letter': ApiLetterLetter;
      'api::school.school': ApiSchoolSchool;
      'api::sector.sector': ApiSectorSector;
      'api::sub-tribe.sub-tribe': ApiSubTribeSubTribe;
      'api::tribe.tribe': ApiTribeTribe;
      'api::voter.voter': ApiVoterVoter;
    }
  }
}
