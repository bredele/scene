
/**
 * Expose 'Mod'
 */

module.exports = function(canvas) {
  return new Scene(canvas);
};


function Scene(canvas) {
  this.el = canvas || document.createElement('canvas');
  this.gl = init(this.el);
  this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
  this.gl.clear(this.gl.COLOR_BUFFER_BIT);
}


Scene.prototype.add = function(obj) {
  obj.context(this.gl);
  obj.draw();
};


/**
 * Init webgl context.
 *
 * @note shouldbe in a different
 * module.
 * 
 * @param  {Element} canvas
 * @return {WebGLContext}
 * @api private
 */

function init(canvas) {
  var context;
  try { 
    context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  } 
  catch(e) {}
  return context;
}