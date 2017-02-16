/// <reference path="../lib/babylon.2.4.d.ts"/>
class Editor {

  private static _ref : string;
  public static setRef(ref : string): void {
    Editor._ref = ref;
  }

  private static _rot : number = 0;
  public static rotate(): void {
    Editor._rot += 1;
    Editor._rot = Editor._rot % 4;
  }

  public static OnClick(evt : MouseEvent): void {
    Editor.GetRelativeMousePos(evt, Editor.PutMeshAtPos);
  }

  public static GetRelativeMousePos(evt: MouseEvent, callback : (x : number, y : number) => void): void {
    let canvas : HTMLCanvasElement = Game.Instance.getCanvas();
    let x : number = evt.clientX;
    let y : number = evt.clientY;
    x -= canvas.getBoundingClientRect().left;
    y -= canvas.getBoundingClientRect().top;
    callback(x, y);
  }

  public static PutMeshAtPos(x: number, y: number): void {
    var pickResult : BABYLON.PickingInfo = Game.Instance.getScene().pick(x, y);
    // if clic hits an object.
    if (pickResult.hit) {
      let mesh : BABYLON.AbstractMesh = pickResult.pickedMesh;
      // if clic hits a mesh.
      if (mesh) {
        // if Mesh is a GameObject.
        if (mesh.name.indexOf("GameObject_") === 0) {
          let gameObject : GameObject = GameObject.FindByMesh(mesh);
          // if GameObject has been found.
          if (gameObject) {
            let newPos : BABYLON.Vector3 = Editor.GetCreatePos(gameObject.getPos(), pickResult.pickedPoint);
            new GameObject(newPos, Editor._rot, Editor._ref);
          }
        }
      }
    }
  };

  // given an object position and a clic position.
  // returns the most likely desired position for creating a new GameObject.
  private static GetCreatePos(targetPos: BABYLON.Vector3, hitPos: BABYLON.Vector3): BABYLON.Vector3 {
    let offset : BABYLON.Vector3 = hitPos.subtract(targetPos);
    let X : number = Math.abs(offset.x);
    let Y : number = Math.abs(offset.y);
    let Z : number = Math.abs(offset.z);

    // set offset to be a 'up, down, right, left, front or back' unit Vector.
    if (X >= Y && X >= Z) {
      if (offset.x >= 0) {
        offset = new BABYLON.Vector3(0.5, 0, 0);
      } else {
        offset = new BABYLON.Vector3(-0.5, 0, 0);
      }
    } else if (Y >= X && Y >= Z) {
      if (offset.y >= 0) {
        offset = new BABYLON.Vector3(0, 0.5, 0);
      } else {
        offset = new BABYLON.Vector3(0, -0.5, 0);
      }
    } else if (Z >= X && Z >= Y) {
      if (offset.z >= 0) {
        offset = new BABYLON.Vector3(0, 0, 0.5);
      }  else {
        offset = new BABYLON.Vector3(0, 0, -0.5);
      }
    }

    let pos : BABYLON.Vector3 = hitPos.add(offset);
    pos.x = Math.round(pos.x);
    pos.y = Math.round(pos.y);
    pos.z = Math.round(pos.z);
    return pos;
  }
}

window.addEventListener("click", Editor.OnClick);
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("red").addEventListener("click", () => {
    Editor.setRef("red");
  });
  document.getElementById("green").addEventListener("click", () => {
    Editor.setRef("green");
  });
  document.getElementById("blue").addEventListener("click", () => {
    Editor.setRef("blue");
  });
  document.getElementById("rotate").addEventListener("click", () => {
    Editor.rotate();
  });
});
