using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class PlayerControls : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void WinMiniGame();

    public float moveSpeed;
    public int toiletPaperRollsNeeded;
    public GameObject winlockObject;
    public Transform leftSpawnBound;
    public Transform rightSpawnBound;

    private int toiletPaperRollsCollected;
    private bool gameEnded;
    private Rigidbody2D rb;

    // Start is called before the first frame update
    void Start()
    {
        toiletPaperRollsCollected = 0;
        rb = GetComponent<Rigidbody2D>();
        gameEnded = false;
    }

    // Update is called once per frame
    void Update()
    {
        // if (winlockObject == null)
        // {
        //     Debug.Log("hello world");
        // }

        float moveHorizontal = Input.GetAxis("Horizontal");
        if ((moveHorizontal > 0 && transform.position.x >= rightSpawnBound.transform.position.x) ||
            (moveHorizontal < 0 && transform.position.x <= leftSpawnBound.transform.position.x))
        {
            rb.velocity = new Vector2(moveHorizontal, 0) * 0;
        }
        else
        {
            rb.velocity = new Vector2(moveHorizontal, 0) * moveSpeed;
        }

        if (toiletPaperRollsCollected >= toiletPaperRollsNeeded && !gameEnded)
        {
            gameEnded = true;
            Destroy(winlockObject);
            WinMiniGame();
        }
    }

    void OnCollisionEnter2D(Collision2D other)
    {
        if (other.gameObject.tag == "Enemy")
        {
            Destroy(other.gameObject);
            toiletPaperRollsCollected++;
        }
    }
}
