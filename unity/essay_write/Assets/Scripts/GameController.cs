using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.Runtime.InteropServices;

public class GameController : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void LoseMiniGame();
    [DllImport("__Internal")]
    private static extern void WinMiniGame();

    public float timeLimit;
    public Text timeText;

    private const string FULLTEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elit porttitor, tempor nunc vitae, ultrices arcu. Praesent ac leo a orci fringilla venenatis. Aenean a orci est. Morbi in tempus nisi, id viverra est. Ut et dignissim lacus, egestas blandit nunc. Fusce lobortis commodo finibus. Cras sodales faucibus turpis, eu venenatis diam fermentum sit amet. In hac habitasse platea dictumst. Nam cursus aliquam elementum. Integer sem purus, vehicula sed egestas ut, maximus quis nibh. Aenean rhoncus eros nec quam viverra volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla venenatis feugiat elit, sed hendrerit risus fermentum.";
    private const int WHITE_BOX_WIDTH = 90;
    private const int WHITE_BOX_HEIGHT = 130;
    private const int OUTLINE_THICKNESS = 10;
    private const int FONT_SIZE = 5;
    private const float FINISH_GAME_WAIT = 1f;

    private string currentText;
    private string[] textArray;
    private int textIndex;
    private bool released;
    private bool won;
    private bool lost;
    private bool gameIsDone;
    private float gameEndTime;

    private int blackBoxWidth = 0;
    private int blackBoxHeight = 0;

    private GUIStyle whiteBackgroundColorStyle = null;
    private GUIStyle blackBackgroundColorStyle = null;

    // Start is called before the first frame update
    void Start()
    {
        textArray = FULLTEXT.Split(null);
        released = true;
        currentText = "";
        won = false;
        lost = false;
        gameIsDone = false;
        gameEndTime = 0f;

        blackBoxWidth = WHITE_BOX_WIDTH + OUTLINE_THICKNESS;
        blackBoxHeight = WHITE_BOX_HEIGHT + OUTLINE_THICKNESS;
    }

    // Update is called once per frame
    void Update()
    {
        if (won || lost)
        {
            if (Time.time >= gameEndTime)
            {
                if (won && !gameIsDone)
                {
                    WinMiniGame();
                    gameIsDone = true;
                }
                else if (lost && !gameIsDone)
                {
                    LoseMiniGame();
                    gameIsDone = true;
                }
            }
        }
        else
        {
            float timeLeft = timeLimit - Time.time;
            timeLeft = timeLeft < 0 ? 0f : timeLeft;
            string toDisplay = "";

            if (textIndex == textArray.Length)
            {
                toDisplay = "Finished!";
                won = true;
                gameEndTime = Time.time + FINISH_GAME_WAIT;
            }
            else if (timeLeft <= 0)
            {
                toDisplay = "Time's up!";
                lost = true;
                gameEndTime = Time.time + FINISH_GAME_WAIT;
            }
            else
            {
                if (Input.GetMouseButton(0) && released)
                {
                    released = false;
                    if (textIndex < textArray.Length)
                    {
                        string word = textArray[textIndex];
                        currentText = currentText + " " + word;
                    }
                    textIndex++;
                }
                else if (!Input.GetMouseButton(0))
                {
                    released = true;
                }

            toDisplay = string.Format("{0:N2}", timeLeft);
            }
            
            timeText.text = toDisplay;
        }
    }

    void OnGUI()
    {
        GUI.skin.box.normal.textColor = Color.black;

        Color colBlack = new Color( 0f, 0f, 0f, 1f );
        Color colWhite = new Color( 1f, 1f, 1f, 1f );
        
        if(blackBackgroundColorStyle == null)
        {
            blackBackgroundColorStyle = new GUIStyle(GUI.skin.box);
            applyBackgroundColor(blackBackgroundColorStyle, colBlack);
        }
        if(whiteBackgroundColorStyle == null)
        {
            whiteBackgroundColorStyle = new GUIStyle(GUI.skin.box);
            applyBackgroundColor(whiteBackgroundColorStyle, colWhite);
        }

        whiteBackgroundColorStyle.wordWrap = true;
        whiteBackgroundColorStyle.fontSize = FONT_SIZE;

        int blackBoxCenterX = findCenterCoordinate(blackBoxWidth, Screen.width);
        int blackBoxCenterY = findCenterCoordinate(blackBoxHeight, Screen.height);
        GUI.Box(new Rect(blackBoxCenterX, blackBoxCenterY, blackBoxWidth, blackBoxHeight), currentText, blackBackgroundColorStyle);

        int whiteBoxCenterX = findCenterCoordinate(WHITE_BOX_WIDTH, Screen.width);
        int whiteBoxCenterY = findCenterCoordinate(WHITE_BOX_HEIGHT, Screen.height);
        GUI.Box(new Rect(whiteBoxCenterX, whiteBoxCenterY, WHITE_BOX_WIDTH, WHITE_BOX_HEIGHT), currentText, whiteBackgroundColorStyle);
    }

    void applyBackgroundColor(GUIStyle style, Color col)
    {
        Color[] pixels = new Color[4];
        for (int i = 0; i < pixels.Length; i++)
            pixels[i] = col;
        Texture2D texture = new Texture2D(2, 2);
        texture.SetPixels(pixels);
        texture.Apply();

        style.normal.background = texture;
    }

    int findCenterCoordinate(int edgeLength, int screenLength)
    {
        int middleScreen = screenLength / 2;
        return middleScreen - (edgeLength / 2);
    }
}
