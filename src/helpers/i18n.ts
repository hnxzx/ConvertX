import { LANGUAGE } from './env';

export type TranslationKey = 
  | 'convert'
  | 'choose_file_or_drag'
  | 'search_conversions'
  | 'convert_to'
  | 'convert_button'
  | 'results'
  | 'delete'
  | 'tar'
  | 'all'
  | 'converted_file_name'
  | 'status'
  | 'actions'
  | 'history'
  | 'account'
  | 'logout'
  | 'login'
  | 'register'
  | 'welcome_to_convertx'
  | 'create_account'
  | 'email'
  | 'password'
  | 'create_account_button'
  | 'report_issues_on'
  | 'email_already_in_use'
  | 'time'
  | 'files'
  | 'files_done'
  | 'expand_details'
  | 'delete_selected'
  | 'select_all'
  | 'detailed_file_information'
  | 'are_you_sure_delete'
  | 'successfully_deleted'
  | 'failed_to_delete'
  | 'an_error_occurred'
  | 'job_not_found'
  | 'no_auth_cookie'
  | 'setup'
  | 'register_button';

const translations = {
  en: {
    convert: 'Convert',
    choose_file_or_drag: 'Choose a file or drag it here',
    search_conversions: 'Search for conversions',
    convert_to: 'Convert to',
    convert_button: 'Convert',
    results: 'Results',
    delete: 'Delete',
    tar: 'Tar',
    all: 'All',
    converted_file_name: 'Converted File Name',
    status: 'Status',
    actions: 'Actions',
    history: 'History',
    account: 'Account',
    logout: 'Logout',
    login: 'Login',
    register: 'Register',
    welcome_to_convertx: 'Welcome to ConvertX!',
    create_account: 'Create your account',
    email: 'Email',
    password: 'Password',
    create_account_button: 'Create account',
    report_issues_on: 'Report any issues on',
    email_already_in_use: 'Email already in use.',
    time: 'Time',
    files: 'Files',
    files_done: 'Files Done',
    expand_details: 'Expand details',
    delete_selected: 'Delete Selected',
    select_all: 'Select all',
    detailed_file_information: 'Detailed File Information:',
    are_you_sure_delete: 'Are you sure you want to delete',
    successfully_deleted: 'Successfully deleted',
    failed_to_delete: 'Failed to delete',
    an_error_occurred: 'An error occurred while deleting jobs. Please try again.',
    job_not_found: 'Job not found.',
    no_auth_cookie: 'No auth cookie, perhaps your browser is blocking cookies.',
    setup: 'Setup',
    register_button: 'Register'
  },
  zh: {
    convert: '转换',
    choose_file_or_drag: '选择文件或拖放至此处',
    search_conversions: '搜索转换格式',
    convert_to: '转换为',
    convert_button: '转换',
    results: '结果',
    delete: '删除',
    tar: '打包下载',
    all: '全部下载',
    converted_file_name: '转换后文件名',
    status: '状态',
    actions: '操作',
    history: '历史记录',
    account: '账户',
    logout: '登出',
    login: '登录',
    register: '注册',
    welcome_to_convertx: '欢迎使用 ConvertX！',
    create_account: '创建您的账户',
    email: '邮箱',
    password: '密码',
    create_account_button: '创建账户',
    report_issues_on: '在以下平台报告问题',
    email_already_in_use: '邮箱已被使用。',
    time: '时间',
    files: '文件数',
    files_done: '已完成文件数',
    expand_details: '展开详情',
    delete_selected: '删除选中项',
    select_all: '全选',
    detailed_file_information: '详细文件信息：',
    are_you_sure_delete: '确定要删除',
    successfully_deleted: '成功删除',
    failed_to_delete: '删除失败',
    an_error_occurred: '删除任务时发生错误，请重试。',
    job_not_found: '任务未找到。',
    no_auth_cookie: '没有认证Cookie，可能您的浏览器正在阻止Cookie。',
    setup: '设置',
    register_button: '注册'
  }
};

export const t = (key: TranslationKey): string => {
  const lang = LANGUAGE;
  return translations[lang as keyof typeof translations]?.[key] || translations.en[key] || key;
};
