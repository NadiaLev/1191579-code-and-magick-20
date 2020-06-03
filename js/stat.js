'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_TITLE = 5;
var GAP_DOWN = 20;
var GAP_PLAYER = 50;
var FONT_GAP = 16;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var CLOUD_COLOR = '#ffffff';
var CLOUD_BACK_COLOR = 'rgba(0, 0, 0, 0.7)';
var TEXT_COLOR = '#000000';
var BAR_USER_COLOR = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_BACK_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов!', CLOUD_X + GAP + GAP, CLOUD_Y + GAP + FONT_GAP + GAP_TITLE + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_PLAYER) * i, CLOUD_Y + CLOUD_HEIGHT - GAP_DOWN);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_PLAYER) * i, CLOUD_Y + CLOUD_HEIGHT - GAP_DOWN - FONT_GAP - GAP - (BAR_HEIGHT * times[i]) / maxTime - GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = BAR_USER_COLOR;
      ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_PLAYER) * i, CLOUD_Y + CLOUD_HEIGHT - GAP_DOWN - FONT_GAP - GAP - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    } else {
      ctx.fillStyle = 'hsl(240, ' + (i + 20) * i + '%, 50%)';
      ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_PLAYER) * i, CLOUD_Y + CLOUD_HEIGHT - GAP_DOWN - FONT_GAP - GAP - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    }
  }
};
