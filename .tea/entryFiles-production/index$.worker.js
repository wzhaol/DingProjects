
require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../../pages/index/index');
require('../../pages/index/devcase/butiful/butiful');
require('../../pages/index/devcase/evaluation/evaluation');
require('../../pages/index/devcase/devcase');
require('../../pages/index/wxsale/wxsale');
require('../../pages/index/wxsale/content/content');
require('../../pages/index/xinerkeji/xinerkeji');
require('../../pages/index/xinerkeji/content/content');
require('../../pages/index/hository/hository');
require('../../pages/index/hository/content/content');
require('../../pages/index/cooperation/cooperation');
require('../../pages/index/cooperation/content/content');
require('../../pages/index/hope/hope');
require('../../pages/index/hope/content/content');
require('../../pages/dynamic/dynamic');
require('../../pages/dynamic/details/details');
require('../../pages/case/case');
require('../../pages/about/about');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
