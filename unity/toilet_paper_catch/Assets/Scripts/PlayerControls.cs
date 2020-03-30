using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerControls : MonoBehaviour
{
    public float moveSpeed;
    public int toiletPaperRollsNeeded;
    public GameObject winlockObject;

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
        float moveHorizontal = Input.GetAxis("Horizontal");
        rb.velocity = new Vector2(moveHorizontal, 0) * moveSpeed;

        if (toiletPaperRollsCollected >= toiletPaperRollsNeeded && !gameEnded)
        {
            gameEnded = true;
            Debug.Log("Won!");
            Destroy(winlockObject);
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
