/// <reference path="../lib/babylon.2.4.d.ts"/>
// instance of BABYLON Engine providing preview for the editor's current settings.
// running another instance of BABYLON Engine instead of using embedded UI might cost some CPU
// benefit is avoiding dealing with multiple cameras in one-scene.
class EditorPreview {
  public static Instance: EditorPreview;
  private _canvas: HTMLCanvasElement;
  getCanvas(): HTMLCanvasElement {
    return this._canvas;
  }
  private _engine: BABYLON.Engine;
  private _scene: BABYLON.Scene;
  getScene(): BABYLON.Scene {
    return this._scene;
  }
  private _camera: BABYLON.ArcRotateCamera;
  private _light: BABYLON.Light;

  constructor(canvasElement: string) {
    EditorPreview.Instance = this;
    this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
    this._engine = new BABYLON.Engine(this._canvas, true);
  }

  createScene(): void {
    this._scene = new BABYLON.Scene(this._engine);

    this._camera = new BABYLON.ArcRotateCamera("editor-preview-camera", 1, 0.8, 5, new BABYLON.Vector3(0, 0, 0), this._scene);
    this._camera.setTarget(new BABYLON.Vector3(0, 0.9, 0));
    this._camera.attachControl(this._canvas, false);

    this._light = new BABYLON.HemisphericLight("light-preview-camera", new BABYLON.Vector3(0, 1, 0), this._scene);
  }

  animate(): void {
    this._engine.runRenderLoop(() => {
      this._scene.render();
      // sync camera position with the one from the main scene helps vizualize
      this._camera.alpha = Game.Instance.getCamera().alpha;
      this._camera.beta = Game.Instance.getCamera().beta;
    });

    window.addEventListener("resize", () => {
      this._engine.resize();
    });
  }
}
