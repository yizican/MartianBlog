'use strict'

// App Module

var app = angular.module('martianblog', ['ui.router', 'martianblogFilters', 'notifications']);

app.config(['$stateProvider', function ($stateProvider) {
	$stateProvider.
	state('front', {
		abstract: true,
		templateUrl: "static/template/front/template.html",
		controller: "FrontCtrl"
	}).
	// Article list on index
	state('front.list', {
		url: "",
		templateUrl: "static/template/front/articleList.html",
		controller: "ArticleListCtrl"
	}).
	// Single article page
	state('front.detail', {
		url: "/articles/:articleId",
		templateUrl: "static/template/front/articleDetail.html",
		controller: "ArticleDetailCtrl"
	}).
	state('admin', {
		abstract: true,
		url: "/admin",
		templateUrl: "static/template/admin/template.html",
		controller: "AdminCtrl",
		data: {"user": {}}
	}).
	state('admin.login', {
		url: "/login",
		templateUrl: "static/template/admin/login.html",
		controller: "AdminLoginCtrl"
	}).
	// Admin dashboard page
	state('admin.dashboard', {
		url: "/dashboard",
		templateUrl: "static/template/admin/dashboard.html",
		controller: "DashboardCtrl"
	}).
	state('admin.articles', {
		url: "/articles",
		templateUrl: "static/template/admin/articleList.html",
		controller: "AdminArticleListCtrl"
	}).
	state('admin.article', {
		url: "/articles/edit/:articleId",
		templateUrl: "static/template/admin/articleEdit.html",
		controller: "AdminArticleEditCtrl"
	}).
	state('admin.new', {
		url: "/articles/edit",
		templateUrl: "static/template/admin/articleEdit.html",
		controller: "AdminArticleEditCtrl"
	});
}]);


marked.setOptions({
	highlight: function (code, lang) {
		if (lang && hljs.LANGUAGES.hasOwnProperty(lang)) {
			return hljs.highlight(lang, code).value;
		} else {
			return hljs.highlightAuto(code).value;
		}
	}
});
