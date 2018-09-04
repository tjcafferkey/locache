"use strict";
import { sessionCache, cache } from "../src";

const expect = require("chai").expect;
const assert = require("chai").assert;
const localStorage = require("mock-local-storage");

global.window = {};
window.localStorage = global.localStorage;

let tom = {
    name: 'Tom',
    age: '26',
    height: 'tall',
    weight: '74kg'
};

describe("cache should be able to get & set items in localStorage", function() {
    it("should set item which will be an instanceof an object", function() {
        cache("profile").set(tom);
        let profile = cache("profile").get();
        expect(profile).to.be.an.instanceof(Object);
    });

    it("should get item which should match var tom", function() {
        cache("profile").set(tom);
        let profile = cache("profile").get();
        expect(profile).to.deep.equal(tom);
    });

    it("should match string 'test'", function() {
        cache("testString").set('test');
        let testString = cache("testString").get();
        expect(testString).to.equal('test');
    });
});

describe("cache should be able to get & set items in sessionStorage", function() {
    it("should set item which will be an instanceof an object", function() {
        sessionCache("profile").set(tom);
        let profile = sessionCache("profile").get();
        expect(profile).to.be.an.instanceof(Object);
    });

    it("should get item which should match var tom", function() {
        sessionCache("profile").set(tom);
        let profile = sessionCache("profile").get();
        expect(profile).to.deep.equal(tom);
    });

    it("should match string 'test'", function() {
        sessionCache("testString").set('test');
        let testString = sessionCache("testString").get();
        expect(testString).to.equal('test');
    });
});