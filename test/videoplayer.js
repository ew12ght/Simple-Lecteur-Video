var expect=require("chai").expect;
var myvideo=require("../app/videoplayer");

describe("Play Video", function() {
  it("checks that the video is playing", function() {
    var isPlaying = myvideo.initPlayer();

    expect(isPlaying).tobe(true);
    });
  });
