var expect=require("chai").expect;
var myvideo=require("../app/videoplayer");

describe("Checks whether the video is playing on startup", function() {
  it("expects the video to be playing", function() {
    var isPlaying = myvideo.initPlayer();

    expect(isPlaying).tobe(true);
    });
  });
